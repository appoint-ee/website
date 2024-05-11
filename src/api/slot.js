import { useContext } from 'react';

import axios from 'axios';

import { UserContext } from '../contexts/UserContext';

import { prepareApiResponse } from '../utils/helpers/api';

import { url } from '../constants/environment';

const useApi = () => {   
    const { user } = useContext(UserContext);

    const base = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + user.accessToken,
        },
        endPoint: url.appointeeApi + "/slots",
    };

    const getTime = (startDate, endDate) => axios
        .get(
            `${base.endPoint}/time?start=${startDate}&endDate=${endDate}`,
            {
                headers: base.headers,
            }
        )
        .then(prepareApiResponse);

    return {
        getTime,
    };
}

export default useApi;
