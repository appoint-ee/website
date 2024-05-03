import { url, googleApi } from '../../constants/environment';

export const redirectToGoogleAuth = () => {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?"
        + `&client_id=${googleApi.client_id}`
        + "&response_type=code"
        + "&access_type=offline"
        + "&include_granted_scopes=true"
        + `&redirect_uri=${url.web}`
        + "&scope=https://www.googleapis.com/auth/calendar"
        + "+https://www.googleapis.com/auth/calendar.events"
        + "+https://www.googleapis.com/auth/userinfo.profile"
        + "+https://www.googleapis.com/auth/userinfo.email"
        + "+https://www.googleapis.com/auth/user.addresses.read"
        + "+https://www.googleapis.com/auth/user.phonenumbers.read";
};
