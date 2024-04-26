
export const url = {
    googleApiAuth: 'https://oauth2.googleapis.com/token',
    appointeeApi: 'http://localhost:5074',
    web: window.location.origin,
};

export const googleApi = {
    client_id: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,  
    client_secret: process.env.REACT_APP_GOOGLE_API_CLIENT_SECRET,
};
