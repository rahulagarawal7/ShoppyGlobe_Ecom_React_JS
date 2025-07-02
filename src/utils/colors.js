// colors.js - E-commerce Color Palette
export const colors = {
  // Primary Brand Colors
  primary: {
    main: "#2563eb", // Vibrant blue (primary actions)
    dark: "#1e40af", // Darker blue (hover states)
    light: "#3b82f6", // Lighter blue
  },

  // Secondary Colors
  secondary: {
    main: "#ea580c", // Orange (secondary actions)
    dark: "#c2410c", // Dark orange
    light: "#fb923c", // Light orange
  },

  // Status Colors
  success: {
    main: "#16a34a", // Green (success messages)
    dark: "#15803d",
    light: "#4ade80",
  },
  warning: {
    main: "#f59e0b", // Amber (warnings)
    dark: "#d97706",
    light: "#fbbf24",
  },
  error: {
    main: "#dc2626", // Red (errors/danger)
    dark: "#b91c1c",
    light: "#ef4444",
  },

  // Neutral Colors
  text: {
    primary: "#1f2937", // Dark gray (main text)
    secondary: "#4b5563", // Medium gray
    disabled: "#9ca3af", // Light gray
    inverted: "#f9fafb", // White (text on dark)
  },

  background: {
    default: "#ffffff", // White
    paper: "#f3f4f6", // Light gray
    dark: "#111827", // Dark (for headers/footers)
  },

  // UI Elements
  border: "#e5e7eb", // Light border
  divider: "#e5e7eb", // For dividers

  // Special Colors
  accent: {
    highlight: "#e11d48", // Pink (for special offers)
    discount: "#10b981", // Teal (for discounts)
  },

  // Button Variants
  button: {
    primary: {
      bg: "#2563eb",
      text: "#ffffff",
      hover: "#1e40af",
    },
    secondary: {
      bg: "#ea580c",
      text: "#ffffff",
      hover: "#c2410c",
    },
    outline: {
      bg: "transparent",
      text: "#2563eb",
      border: "#2563eb",
      hover: "#f3f4f6",
    },
  },

  // Product Rating
  rating: {
    filled: "#f59e0b", // Gold for stars
    empty: "#d1d5db", // Gray for empty stars
  },

  // Category Colors (can extend as needed)
  categories: {
    electronics: "#3b82f6",
    clothing: "#ec4899",
    home: "#14b8a6",
    books: "#8b5cf6",
  },
};
