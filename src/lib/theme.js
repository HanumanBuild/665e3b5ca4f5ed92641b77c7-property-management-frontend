
import { createGlobalStyle } from 'styled-components';

/**
 * Manages the styling themes for the application using styled-components.
 * This file will define and export the global styles and themes (like colors, fonts, and other constants)
 * that can be reused across all styled components, ensuring consistency in the design throughout the app.
 */

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
  }
`;

export const theme = {
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    successColor: '#28a745',
    dangerColor: '#dc3545',
    warningColor: '#ffc107',
    infoColor: '#17a2b8',
    lightColor: '#f8f9fa',
    darkColor: '#343a40',
    fontSizeSmall: '0.8em',
    fontSizeMedium: '1em',
    fontSizeLarge: '1.2em',
    navHeight: '50px'
};
