import { useContext } from 'react';

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

    const getTime = (startDate, endDate) => fetch(
        `${base.endPoint}/time?start=${startDate}&endDate=${endDate}`,
        {
            method: "GET",
            headers: base.headers,
        })
        .then(prepareApiResponse);

    return {
        getTime,
    };
}

export default useApi;
