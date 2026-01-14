// ESLint v9 configuration
// Flat config format for Daily AI Assistant

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        console: "readonly",
        fetch: "readonly",
        alert: "readonly",
        
        // Custom globals (if any)
      }
    },
    rules: {
      // Possible Errors
      "no-console": "off", // Allow console for debugging
      "no-debugger": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      
      // Best Practices
      "eqeqeq": ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-with": "error",
      "prefer-const": "warn",
      
      // Style
      "indent": ["error", 4],
      "quotes": ["error", "single", { avoidEscape: true }],
      "semi": ["error", "always"],
      "comma-dangle": ["warn", "never"], // Warn instead of error
      
      // ES6+
      "arrow-spacing": "error",
      "no-var": "error",
      "prefer-arrow-callback": "warn",
      "prefer-template": "warn"
    }
  },
  {
    // Ignore patterns
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".git/**"
    ]
  }
];
