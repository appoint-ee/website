import React, { createContext, useState } from 'react';

const BookingContext = createContext();

const BookingProvider = ({
    children,
}) => {
    // #region State definition
    const [form, setForm] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);
    // #endregion

    // #region Handlers
    const saveForm = () => {

    };
    // #endregion

    return (
        <BookingContext.Provider
            value={{
                state: {
                    form,
                    isFormOpen,
                },
                functions: {
                    setIsFormOpen,
                    setForm,
                    saveForm,
                },
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export { BookingContext, BookingProvider };
