
export const url = {
    googleApiAuth: 'https://oauth2.googleapis.com/token',
    appointeeApi: process.env.REACT_APP_API_URL,
    web: window.location.origin,
};

export const googleApi = {
    client_id: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,  
    client_secret: process.env.REACT_APP_GOOGLE_API_CLIENT_SECRET,
};
