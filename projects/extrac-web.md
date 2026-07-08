---
title: React web app for ExTrac
meta_description:
layout: layouts/default.njk
permalink: "/projects/extrac-web/"
tags: [project, frontend, react, accessiblility]
---

# {{ title }}

Raising the structural quality of a production React platform.

Alongside owning ExTrac's mobile app, Phil spent a long time embedded in the company's web platform, a React and TypeScript application serving intelligence analysts in national security and defence. Where the mobile work was about building foundations from scratch, the web work was the harder, less glamorous discipline: improving the structural quality of a large, live codebase without stopping feature delivery. The pattern across the period was consistent - cross-cutting concerns rather than feature slices.

The largest single body of work was an app-wide overhaul of the dialog layer. Dozens of dialog components across every domain of the product - user and organisation management, alerting, filtering, MFA, data ingest, and dashboards - were systematically migrated through successive component generations to a single, consistent, accessible dialog. Along the way Phil resolved the accumulated debt that kind of migration surfaces: portal targets, z-index conflicts, viewport overflow, and background-click behaviour. The result was one dialog system where there had been several, with visual and accessibility improvements landing on nearly every dialog in the product.

He was also a core contributor to a sustained, multi-month TypeScript migration, converting a wide cross-section of the codebase - service layers, state stores, socket handling, hooks, and complex dialog components - and typing the API response models as he went. That typing work paid off directly in feature delivery: Phil built a granular data-permissions capability end to end, spanning the authentication and user-administration flows, alert configuration, and the underlying data model, released safely behind feature flags. In the auth layer itself he hardened the MFA flow, fixed how MFA availability propagated after login, guarded token refresh against a missing-cookie edge case, and backed the changes with a new test suite for the login and MFA paths.

The remainder of the period followed the same instinct for platform-level care: a redesigned navigation sidebar that fixed a nested-interactive accessibility violation rather than shipping around it, initial bundle-size reductions through lazy loading of heavy dependencies, dependency and vulnerability upgrades, pre-commit type-checking, and the stabilisation of flaky tests so coverage thresholds could rise rather than erode. Individually these are unglamorous; collectively they are what keeps a production platform fast, secure, and accessible for the analysts who depend on it.
