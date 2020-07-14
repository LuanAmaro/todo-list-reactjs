const APP_ENV = 'local'; // local ou production

// API_URL
const URL_DEVELOPMENT = 'http://localhost:8000';
const URL_PRODUCTION  = '';

// API_CLIENT_ID
const CLIENT_ID_DEVELOPMENT = 1;
const CLIENT_ID_PRODUCTION = 1;

//API_CLIENT_SECRET
const CLIENT_SECRET_DEVELOPMENT = '';
const CLIENT_SECRET_PRODUCTION = '';

// API Config:
export const API_URL = APP_ENV === 'local' ? URL_DEVELOPMENT : URL_PRODUCTION;
export const API_CLIENT_ID = APP_ENV === 'local' ? CLIENT_ID_DEVELOPMENT : CLIENT_ID_PRODUCTION;
export const API_CLIENT_SECRET = APP_ENV === 'local' ? CLIENT_SECRET_DEVELOPMENT : CLIENT_SECRET_PRODUCTION;
export const API_GRANT_TYPE = 'password';
