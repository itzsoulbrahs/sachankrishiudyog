# Sachan Krishi Yantra Udyog Website

## Overview
This is the official website for Sachan Krishi Yantra Udyog, a leading manufacturer and wholesaler of agricultural equipment in Chhattisgarh, India. The site showcases their products including rotavators, ploughs, and other farming equipment.

## Project Architecture
- **Framework**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Port**: 5000

## Directory Structure
```
/
├── server.js           # Express server entry point
├── package.json        # Node.js dependencies
├── views/
│   ├── partials/       # Reusable EJS components
│   │   ├── head.ejs    # HTML head with CSS links
│   │   ├── header.ejs  # Navigation and header
│   │   ├── footer.ejs  # Footer content
│   │   └── scripts.ejs # JavaScript includes
│   └── pages/          # Page templates
│       ├── index.ejs   # Homepage
│       ├── about.ejs   # About page
│       ├── contact.ejs # Contact form page
│       ├── gallery.ejs # Photo gallery
│       ├── video.ejs   # Video page
│       ├── 404.ejs     # Error page
│       └── products/   # Product pages
├── public/
│   └── assets/         # Static files (CSS, JS, images)
└── .gitignore
```

## Routes
- `/` - Homepage
- `/about` - About Us
- `/contact` - Contact form (GET and POST)
- `/gallery` - Photo gallery
- `/video` - Video gallery
- `/metal-tomato-plough-manufacturer-in-chattisgarh` - Metal Tomato Plough
- `/feet-sachan-rotavator-manufacturer-in-bhilai` - 6 Feet Sachan Rotavator
- `/rotavator-agriculture-equipment-wholesaler-in-chattisgarh` - Rotavator Equipment
- `/multi-speed-rotavator-manufacturer-in-raipur` - Multi Speed Rotavator
- `/tractor-rotavator-wholesaler-in-raipur` - Tractor Operated Rotavator
- `/tractor-cage-wheel-manufcaturer-in-chattisgarh` - Tractor Cage Wheel
- `/rotavator-manufacturer-in-chattisgarh` - Rotavator Chattisgarh
- `/rotavator-manufacturer-in-bilaspur` - Rotavator Bilaspur

## Recent Changes
- **December 12, 2025**: Converted entire site from PHP to Node.js/Express with EJS templating
  - Created Express server with all routes
  - Converted PHP includes to EJS partials
  - All 14 pages converted to EJS templates
  - Static assets served from public/assets/
  - PHP redirects maintained for SEO compatibility

## Running the Application
```bash
npm start
```
The server runs on port 5000.

## Contact Information
- **Phone**: +91-9754424455, +91-6260430174
- **Email**: amanyes19@gmail.com
- **Location**: Ward no. 15, Near power house, Ambikapur Road, Ramanujganj, Balrampur, Chhattisgarh
