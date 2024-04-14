import { faker } from '@faker-js/faker';

export const dates = {
    getList: {
        url: "/dates/GetList",
        result: {
            totalItemCount: faker.datatype.number
        },
    },  
};
