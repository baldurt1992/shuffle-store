# Landing Page for Shopify Simulator - Gradiweb Technical Test

## Overview

This project is a landing page created for the Gradiweb technical test. It follows the provided design specifications and implements a fully responsive landing page with dynamic content using Shopify's Simulator framework and Liquid templating language.

The page includes various components, such as a hero section, main header, footer, carousel, and more, all of which are dynamically populated using `settings_data.json`. The page is fully responsive, with optimizations for both desktop and mobile views.

## Key Features

- **Responsive Design**: Adapts to desktop and mobile screens.
- **Dynamic Content**: Uses Liquid templating to pull data from `settings_data.json`.
- **Sticky Header**: The header becomes sticky with transparency when scrolling.
- **Product Carousel**: Displays a set of products that can be revealed dynamically using the "View All" button.
- **Footer & Mobile Footer**: Both desktop and mobile versions of the footer are included, with links and payment methods dynamically rendered.
- **Marquee Animation**: Animated text scrolls across the screen in both the header and hero sections.

## Components Documented

### 1. Hero Section

#### Description

The hero section is the first section users see. It contains a background image, a button, and an animated marquee. The background image, button text, and button link are passed dynamically from `settings_data.json`.

#### Code Example:

```liquid
{% render 'hero', 
  background_image: settings['hero-banner'].settings.background_image,
  button_text: settings['hero-banner'].settings.button_text, 
  button_link: settings['hero-banner'].settings.button_link, 
  marquee_text: settings['hero-banner'].settings.marquee_text 
%}
```

## Documentation

- **Data Binding**: The background image, button text, and button link are fetched from `settings_data.json`.
- **Marquee**: The text scrolls across the screen, and its content is also passed dynamically from `settings_data.json`.

---

## 2. Main Header

### Description

The main header includes a logo, payment methods, and navigation links (All Products, Collections). It also includes a mobile menu with a burger button for navigation.

### Code Example:

```liquid
<div class="main-header">
  <div class="container">
    <div class="main-header__burger">
      <button class="burger-menu" id="openMenu">
        <!-- SVG for burger icon -->
      </button>
      {% render 'mobile-menu' %}
    </div>
    <div class="main-header__logo">
      <a href="/">
        {% render 'logo' %}
      </a>
    </div>
    <div class="main-header__payments">
      <h3>We Accept</h3>
      {% if payment_methods %}
        {% for payment in payment_methods %}
          <img src="/assets/{{ payment.image }}" alt="{{ payment.name }}" class="main-header__icon">
        {% endfor %}
      {% else %}
        <p>No payment methods available.</p>
      {% endif %}
    </div>
    <div class="main-header__right">
      <nav class="main-header__nav">
        <ul class="main-header__menu">
          <li class="main-header__item"><a href="#" class="main-header__link">All Products</a></li>
          <li class="main-header__item"><a href="#" class="main-header__link">Collections</a></li>
        </ul>
      </nav>
      <button type="button" class="main-header__btn">
        <div class="main-header__cart">
          <svg xmlns="http://www.w3.org/2000/svg">
            <!-- SVG path for cart icon -->
          </svg>
        </div>
      </button>
    </div>
  </div>
</div>
```
## Documentation

- **Payment Methods**: Dynamically rendered from `settings_data.json`.
- **Logo**: Renders the brand's logo using `settings_data.json`.
- **Mobile Menu**: Explained how the mobile menu toggles visibility using the `openMenu` and `closeMenu` buttons.

---

## 3. Footer

### Description

The footer includes primary and secondary navigation links, payment method icons, and social media links. It also features a newsletter subscription form.

### Code Example:

```liquid
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__left">
      <div class="site-footer__logo">
        {% render 'logo' %}
      </div>
      <p class="site-footer__text">
        {{ settings.footer.settings.footer_text | default: '© 2024, Default Footer Text' }}
      </p>
    </div>
    
    <div class="site-footer__center">
      <nav class="site-footer__nav">
        <ul class="site-footer__primary-links">
          {% for link in settings.footer.settings.primary_links %}
            <li><a href="{{ link.url }}">{{ link.label }}</a></li>
          {% endfor %}
        </ul>
      </nav>
    </div>
    
    <div class="site-footer__social">
      <a href="{{ settings.footer.settings.social_links.facebook | default: '#' }}">FACEBOOK</a>
      <a href="{{ settings.footer.settings.social_links.x | default: '#' }}">X (TWITTER)</a>
      <a href="{{ settings.footer.settings.social_links.instagram | default: '#' }}">INSTAGRAM</a>
    </div>
  </div>
</footer>
```
## Documentation

- **Dynamic Links**: All links (primary and secondary) and social media links are populated from `settings_data.json`.
- **Payment Methods**: Dynamically renders payment icons using `settings_data.json`.

---

## 4. Carousel Section

### Description

The carousel section dynamically displays products, with a button to reveal more products.

### Code Example:

```liquid
<div class="carousel">
  <div class="carousel__container">
    {% for image in images %}
      <div class="carousel__item-wrapper {% if forloop.index > visible_images %}hidden{% else %}show{% endif %}">
        <div class="carousel__item">
          <img src="/assets/{{ image.url }}" alt="{{ image.alt }}">
        </div>
        <div class="carousel__content">
          <div class="carousel__info">
            <p class="carousel__item-name">{{ image.alt }}</p>
            <p class="carousel__item-price">{{ image.price }}</p>
          </div>
          <button type="button" class="carousel__cart-btn">Add to Cart</button>
        </div>
      </div>
    {% endfor %}
  </div>
  {% render 'button', text: 'View All', class: 'carousel__btn', type: 'button' %}
</div>
```
## Documentation

- **Visibility Logic**: Products are shown or hidden based on the `visible_images` value.
- **Dynamic Content**: Products' names, prices, and images are pulled from the `images` array in `settings_data.json`.
- **"View All" Button**: Explains how the "View All" button works and reveals more items.

---

## 5. Mobile Footer

### Description

The mobile footer is a simplified version of the desktop footer for mobile devices. It includes navigation links, social media links, and payment methods.

### Documentation

- **Navigation Links**: Primary and secondary links are dynamically rendered from `settings_data.json`.
- **Newsletter Subscription**: Provides an email input field for users to subscribe to notifications.
- **Social Media Links**: Dynamically fetched from `settings_data.json`.

---

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <https://github.com/baldurt1992/shuffle-store.git>
   ```
## Install dependencies (using npm or yarn):

```bash
npm install
```
## Run the project locally:

```bash
npm start
```

The page will be accessible at http://localhost:3000.

## Development Best Practices

- **Modular CSS (BEM)**: The code follows the BEM methodology for consistent and scalable CSS class naming.
- **Liquid Templating**: Dynamic data is rendered using Liquid templating language, with proper checks for missing data (default values).
- **JavaScript**: We use clean, reusable JavaScript to manage user interactions (like the sticky header and mobile menu).
- **Version Control**: Git is used for version control. Ensure to follow best practices for branching, commits, and pull requests.