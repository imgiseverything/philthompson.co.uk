// 11ty config
const fs = require("fs");

// Load plugins here
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Cache bust CSS
  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    const relativeUrl =
      urlPart.charAt(0) == "/" ? urlPart.substring(1) : urlPart;

    try {
      const fileStats = fs.statSync(relativeUrl);
      const dateTimeModified = new Date(fileStats.mtime).getTime();

      params.set("v", dateTimeModified);
    } catch (error) {
      console.error(error);
    }

    return `${urlPart}?${params}`;
  });

  // Put some files in the root
  eleventyConfig.addPassthroughCopy({ "./robots.txt": "/robots.txt" });
  eleventyConfig.addPassthroughCopy({ "./humans.txt": "/humans.txt" });
  eleventyConfig.addPassthroughCopy({
    "./BingSiteAuth.xml": "/BingSiteAuth.xml",
  });
};
