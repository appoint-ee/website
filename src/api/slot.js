import { useContext } from 'react';

import axios from 'axios';

import { UserContext } from '../contexts/UserContext';

import { prepareApiResponse } from '../utils/helpers/api';

import { url } from '../constants/environment';

const useApi = () => {   
    const { getOperableUser } = useContext(UserContext);
    const user = getOperableUser();

    const base = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + user.accessToken,
        },
        endPoint: url.appointeeApi + "/slots",
    };

    const getDay = (userName, startDate, endDate) => axios
        .get(
            `${base.endPoint}/day?userName=${userName}&start=${startDate}&end=${endDate}`,
            {
                headers: base.headers,
            }
        )
        .then(prepareApiResponse);
    const getTime = (userName, startDate, endDate) => axios
        .get(
            `${base.endPoint}/time?userName=${userName}&start=${startDate}&end=${endDate}`,
            {
                headers: base.headers,
            }
        )
        .then(prepareApiResponse);

    return {
        getDay,
        getTime,
    };
}

export default useApi;
