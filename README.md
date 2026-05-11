# 501 Feature Cards Module

A reusable, accessible and CMS-agnostic feature cards component built as part of a frontend technical assessment for 501.

The project replaces static image-based cards with a scalable component architecture and easy CMS integration.

## Objectives

The original 501 implementation uses image-based cards containing baked-in text and statistics. Updating figures currently requires manual design edits and asset replacement.

This project aims to:

- separate content from presentation
- create reusable feature card components
- support dynamic CMS-driven updates
- preserve decorative branding flexibility
- improve accessibility and maintainability

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Contentful CMS
- Netlify

## Architecture Approach

The project follows a component-based and CMS-agnostic architecture using semantic HTML, modular CSS and vanilla JavaScript.

The implementation aims to separate editable content from decorative presentation while remaining lightweight and framework-independent.

## Installation & Setup

Clone repository:

```bash
git clone https://github.com/mateuszdo/501-feature-cards-module.git
```

Live demo: https://501-feature-cards-module.netlify.app/

To run locally it require CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN

## Reflection

1. Decouple image from the text and recreate module using CSS and hardcoded markup.
2. Move content into JSON file and swap hardcoded values by fetching them from JSON file.
3. Netlify for continuous delpoyment from GitHub so every push is reflected immediately on the live URL
4. Setup Contentful CMS - 3 Content entries that will replace local JSON and allow full control without touching code
5. Replace data fetch from local JSON to Contentful CMS using Netlify function and keep API credentials server-side instead of exposing them in client-side JS
6. Contentful REST API returns linked assets in a separate includes.Asset array rather than inline on the entry — unlike the Contentful JS SDK which resolves this automatically. Solved by building an asset lookup map keyed by ID to resolve each card's image URL at render time.
