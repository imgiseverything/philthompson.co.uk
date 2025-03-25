---
title: The Economist Films
meta_description: In 2015, Phil created the first iteration of the Economist Films website and an Amazon Fire TV app too.
layout: layouts/default.njk
---

# {{ title }}

Phil created the first iteration of the [Economist Films](https://films.economist.com) website and an Amazon Fire TV app too.

The popular publication, The Economist asked Phil to build the website for their exciting new venture – Economist Films and after that success they asked him to build their Amazon Fire TV app too.

The project was fairly straightforward, after all it was a list of video thumbnails, with accompanying descriptions that linked to play-in-place videos. Phil Thompson took this simple set-up and made sure performance and ease of updating were the main concerns for this seemingly simple website.

## Performance

An early decision was made to not preload videos. The videos were to be hosted by YouTube, but with upto 10 videos on the homepage it would be crazy not to load this only when requested by the user.

Images were created with the `picture` element in HTML5 to ensure mobile/tablet users were downloading images that were suitable for their screensizes.

## Updating ease

The website ran off a simple JSON file which lists the films metadata and some simple PHP grabs that data and displays it (this way we’re not reliant on JavaScript for the basic content to show).

When a new film came out, someone in-house had to update a simple JSON and the site was automatically updated. This was great for a site that when a new season is launched, updated every 2 weeks.

## Timelines:

- Work started and completed: Autumn 2015
- Project duration: 124 hours (and 51.5 hours for the Amazon Fire TV app)
- Website URL: http://films.economist.com/
