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

Run locally:

```bash
open index.html
```

## Reflection

1. Decouple image from the text and recreate module using CSS and hardcoded markup.
2. Move content into JSON file and swap hardcoded values by fetching them from JSON file.
3. Deploy to Netlify
4. Setup Contentful CMS
