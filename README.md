# Vitality Health Tracker

A web app that tracks sleep, water intake, and stress levels to generate a health score and suggestions.

## Features
- Health score calculation
- Personalized suggestions
- Data visualization using charts
- Data stored using localStorage

## Technologies Used
- HTML
- CSS
- JavaScript
- Chart.js

## Live Demo
https://komalkumari007.github.io/vitality-health-tracker/
## Challenges & Learnings

- Faced issue with Chart.js not rendering due to incorrect object handling.
- Debugged using browser console and identified that `.destroy()` was being called on a non-chart object.
- Fixed by validating the chart instance before destroying it.

- Improved UI alignment by restructuring input layout using CSS flexbox.

- Learned how to debug JavaScript errors using browser developer tools.
