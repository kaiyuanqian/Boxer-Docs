---
sidebar_position: 1
---

# Project Overview

## Overview

This document outlines the technical stack used in the Eagle (sub-)project. Eagle aims to establish an efficient method for triaging incoming medical donations and recyclables, it involves scanning the packaging to identify the product type and calculating a relevance score for various products available in the database. The warehouse sorter can then use this information to scan the product and select from the matching options provided. Additionally, with the assistance of the Boxer-Boy project, the system will determine the appropriate box for containing the donation.



## Technologies

This project uses the following technologies:
- **Next.js**: A React framework that enables server-side rendering and static site generation for faster, SEO-friendly web applications.
- **HeroUI**: A UI component library providing pre-styled elements for consistent user interfaces.
- **Tailwind CSS**: A utility-first CSS framework that allows rapid styling directly in HTML markup without writing custom CSS.
- **TypeScript**: A superset of JavaScript that adds static type checking to catch errors during development.
- **Tesseract.js**: An optical character recognition (OCR) library that converts images of text into machine-readable text data.
- **DDEV**: A containerized local development environment tool that ensures consistent development setups across the team.



## Local Development

If you wish to use docker to run the web application, and that it requires to be detached from your computer's environment, and sharable in the internet, you may run it via DDEV:
```
ddev start     # Start the DDEV environment and containers
ddev describe  # Show detailed information about the current DDEV project
ddev share     # Create a temporary public URL for sharing your local DDEV site
```

Otherwise you can simply run it on your local via npm:
```
npm run dev     # Start the development server on localhost:3000
npm run build   # Create an optimized production build
npm run start   # Run the production server
npm run lint    # Run ESLint to check code quality
npm run test    # Run Jest test suites
```