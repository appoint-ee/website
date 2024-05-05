import { url } from '../constants/environment';

export const authorize = async (params) => {
    const request = fetch(url.googleApiAuth, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('An error was encountered during the authentication process!');
        }

        return response.json();
    });

    return request;
};
