import { prepareApiResponse } from '../utils/helpers/api';

import axios from 'axios';

import { url } from '../constants/environment';

const useApi = () => {   
    const base = {
        headers: {
            accept: "plain/text",
        },
        endPoint: url.appointeeApi + "/users",
    };

    const get = (accessToken, userName) => axios
        .get(
            base.endPoint + "/" + userName,
            {
                headers: {
                    ...base.headers,
                    Authorization: "Bearer " + accessToken,
                },
            }
        )
        .then(prepareApiResponse);

    return {
        get,
    };
}

export default useApi;
