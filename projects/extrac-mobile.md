---
title: React Native mobile app for ExTrac
meta_description:
layout: layouts/default.njk
permalink: "/projects/extrac-mobile/"
tags: [project, mobile, react native, accessiblility, expo]
---

# {{ title }}

Taking a React Native app from MVP to production grade

When ExTrac's mobile app reached the point where it needed to grow beyond its MVP foundations, Phil took ownership of the codebase as its sole engineer, with a brief to make it robust enough for an enterprise audience of national security and defence users. Over six months he worked across every layer of the app: platform upgrades, a design system, feature delivery, security hardening, and the testing and tooling culture around it all.

## The foundations came first.

Phil upgraded the app across two Expo SDK versions, resolving iOS deployment targets, Android build failures, and TypeScript compatibility along the way, and fixed the CI pipeline so builds were dependable. He introduced ESLint and Prettier across the codebase, added type-checking to pre-commit hooks, and drove a substantial test-coverage push spanning hooks, screens, components, and stores, taking coverage from zero to around ~85%.

Error boundaries on every route segment, standardised error recording, and observability wiring meant that when things did go wrong, the team could see it. He also resolved subtle production risks a less experienced engineer might miss: a concurrent token-refresh race condition, MFA handling for sequential authentication factors, and a navigation race on logout.

## Adding a design system for UI consistency

With the platform stable, Phil built the app's design system from scratch: ~10 components including inputs, toggles, chips, modals, toasts, and a full typography system, with colour tokens standardised against the Figma source of truth. An in-app design system screen gave designers and engineers a shared, living reference.

## Features

On top of those components he delivered a complete monitoring feature end to end, from the list screen and pagination through pause, resume, and unread states, and shipped a stream of improvements to the app's AI analyst experience, including markdown table rendering, streaming message states, and a major refactor that broke a monolithic screen into focused modules.
