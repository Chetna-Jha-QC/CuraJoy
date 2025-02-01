# CuraJoy
CuraJoy: Frontend and backend for a pharmacy website

_A simple multi-page e-commerce pharmacy application inspired from 1mg.com for learning web development with HTML, CSS, and JavaScript._

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [File Structure](#file-structure)  

---

## Overview

This project is a mini-commerce application designed to demonstrate front-end development skills. It involves creating a responsive user interface, manipulating the DOM, and implementing LocalStorage for data persistence.  

The app includes the following pages:  
- `index.html`  
- `seasonessentials.html`
- `firstaid.html`
- `cart.html`
- `payment.html`
- `admin.html`
- `inventory.html`

To access the admin.html use the following credentials
username - admin@empher.com
password - Admin@1234

---

## Features

- **LocalStorage Integration**: Persistent wishlist and cart data across sessions.  
- **Responsive Design**: Adapts to different screen sizes for better user experience.

---

## Technologies Used

- **HTML**: Structuring the web pages.  
- **CSS**: Styling the application.  
- **JavaScript (ES6+)**: Adding interactivity and functionality.  
- **LocalStorage**: Storing and retrieving data locally.  
- **Glitch**: Backend API for fetching product data.

---

## Installation

1. Clone this repository to your local machine:  
   ```bash
   git clone https://github.com/Chetna-Jha-QC/CuraJoy.git

---
## File Structure
```
CuraJoy - A online pharmacy website inspired from 1mg.com /
│
├── index.html                     # Home page with product listings
├── seasonalessentials.html        # seasonal products page
├── firstaid.html                  # first-aid products page
├── cart.html                      # Cart page
├── payment.html                   # checkout page
├── admin.html                     # admin page
├── inventory.html                 # inventory page
│
├── scripts/                       # JavaScript files
│   ├── index.js                   # Handles homepage functionality
│   ├── seasonessentials.js        # Manages season and firstaid functionality
│   ├── add-to-cart.js             # Manages add to cart functionality
│   ├── dark-light.js              # Manages theme functionality
│   ├── header.js                  # Manages header functionality
│   ├── inventory.js               # Manages inventory functionality
│   ├── loginstatus.js             # Manages login functionality
│   ├── cart.js                    # Manages cart functionality
│
├── styles/                        # CSS files
│   ├── index.css                  # Styles for homepage
│   ├── cart.css                   # Styles for cart page
│   ├── admindashboard.css         # Styles for admin page
│   ├── firstaid.css               # Styles for firstaid page
│   ├── inventory.css              # Styles for inventory
│   ├── pages.css                  # Styles for seasonessentail
│   ├── payment.css                # Styles for payment
│
├── assets/                        # Images and other static assets
│
└── README.md                      # Project documentation
```
