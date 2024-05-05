import { prepareApiResponse } from '../utils/helpers/api';

import { url } from '../constants/environment';

const useApi = () => {   
    const base = {
        headers: {
            accept: "plain/text",
        },
        endPoint: url.appointeeApi + "/people",
    };

    const get = accessToken => fetch(
        base.endPoint,
        {
            method: "GET",
            headers: {
                ...base.headers,
                Authorization: "Bearer " + accessToken,
            },
        })
        .then(prepareApiResponse);

    return {
        get,
    };
}

export default useApi;
