import React, { createContext, useState } from 'react';

const BookingContext = createContext();

const BookingProvider = ({
    children,
}) => {
    // #region State definition
    const [detail, setDetail] = useState({
        
    });
    const [form, setForm] = useState({
        
    });
    const [isFormOpen, setIsFormOpen] = useState(false);
    // #endregion

    return (
        <BookingContext.Provider
            value={{
                state: {
                    detail,
                    form,
                    isFormOpen,
                },
                functions: {
                    setIsFormOpen,
                    setDetail,
                    setForm,
                },
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export { BookingContext, BookingProvider };
