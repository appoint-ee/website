
export const prepareApiResponse = response => {
    if (!response.ok) {
        throw new Error('An error was encountered during the process of populating user data!');
    }

    return response.json();
};
