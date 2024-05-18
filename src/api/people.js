import { prepareApiResponse } from '../utils/helpers/api';

import axios from 'axios';

import { url } from '../constants/environment';

const useApi = () => {   
    const base = {
        headers: {
            accept: "plain/text",
        },
        endPoint: url.appointeeApi + "/people",
    };

    const get = accessToken => axios
        .get(
            base.endPoint,
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
