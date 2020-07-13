const APP_ENV = 'local'; // local ou production

// API_URL
const URL_DEVELOPMENT = 'http://localhost:3333';
const URL_PRODUCTION  = '';

// API Config:
export const API_URL = APP_ENV === 'local' ? URL_DEVELOPMENT : URL_PRODUCTION;
