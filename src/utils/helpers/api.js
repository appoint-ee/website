
export const prepareApiResponse = response => {
    if (response.status !== 200) {
        // throw new Error('An error was encountered during the process of populating user data!');
        return {};
    }

    return response.data;
};
