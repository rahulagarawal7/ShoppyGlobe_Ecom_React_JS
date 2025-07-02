# 🛒 ShoppyGlobe – E-commerce React Application

ShoppyGlobe is a modern e-commerce web application built with **React**, **Redux**, **React Router**, and **Tailwind CSS**. It allows users to browse products, view detailed product info, manage a shopping cart, and proceed to checkout.

---
##Deplotment Link-https://shoppy-globe-ecom-react-js-az34.vercel.app/

## 📚 Features

### Component Structure
- **App**: Root component managing the layout and routing.
- **Header**: Navigation bar with links and cart icon.
- **ProductList**: Displays all products and includes search functionality.
- **ProductItem**: Shows individual product info with an "Add to Cart" button.
- **ProductDetail**: Detailed view of a selected product using dynamic routing.
- **Cart**: Displays cart items, with the ability to update quantity or remove.
- **CartItem**: Represents each product in the cart with remove functionality.
- **NotFound**: 404 page for unknown routes.

### Props
- Components receive data via props and are designed to be reusable.
- Uses appropriate prop validation for safer component communication.

### Data Fetching
- **ProductList**: Fetches products from `https://dummyjson.com/products` using `useEffect`.
- **Custom Hook**: `useFetchProducts` handles API logic and loading/error states.
- **ProductDetail**: Fetches product data based on the route ID.
- Graceful error handling for failed API requests.

### State Management
- Uses **Redux Toolkit** for managing cart state.
- Actions and reducers handle:
  - Adding to cart
  - Removing from cart
  - Updating item quantity
- Selectors help access the cart state and totals.
- Search feature filters products by title.

### Event Handling
- Add and remove items using Redux-dispatched actions.
- Button handlers are properly wired in `ProductItem` and `CartItem`.

### Routing
- Configured with React Router:
  - `/` → Home / Products
  - `/product/:id` → Product Detail
  - `/cart` → Shopping Cart
  - `/checkout` → Checkout Page
  - `*` → 404 Not Found
- Product details use dynamic route parameters.

### List Rendering
- Products and cart items rendered using `.map()`.
- Unique keys provided using product IDs.

### Performance Optimization
- Uses `React.lazy` and `Suspense` to lazy-load components and reduce bundle size.

### Styling
- Styled with **Tailwind CSS** for utility-first styling.
- Fully responsive on desktop, tablet, and mobile screens.
- Clean layout and minimal design for better UX.

---

## 🛠 Tech Stack

- **React 19**
- **Redux Toolkit**
- **React Router DOM v7**
- **Axios**
- **Tailwind CSS**
- **Vite**
- **Lucide React** & **React Icons** for UI icons

---

## 📦 Installation & Setup

1. Install Dependencies
--- npm install

2. Start Development Server
--- npm run dev

Visit http://localhost:5173 in your browser.

3. Build for Production
--- npm run build

4. Preview Production Build
--- npm run preview

📁 Folder Structure (Simplified)

src/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   └── NotFound.jsx
├── redux/
│   ├── store.js
│   └── cartSlice.js
├── hooks/
│   └── useFetchProducts.js
├── pages/
│   ├── Home.jsx
│   ├── ProductDetailPage.jsx
│   ├── CartPage.jsx
│   └── Checkout.jsx
├── App.jsx
├── main.jsx
└── index.css

📄 Dependencies

"dependencies": {
  "@reduxjs/toolkit": "^2.8.2",
  "@tailwindcss/vite": "^4.1.11",
  "axios": "^1.10.0",
  "lucide-react": "^0.525.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-redux": "^9.2.0",
  "react-router-dom": "^7.6.3",
  "tailwindcss": "^4.1.11"
}
