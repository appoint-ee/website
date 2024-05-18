import React, { createContext, useState } from 'react';

const BookingContext = createContext();

const BookingProvider = ({
    children,
}) => {
    // #region State definition
    const [selectedDate, setDate] = useState(null);
    const [selectedMonth, setMonth] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [form, setForm] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);
    // #endregion

    // #region Handlers
    const onMonthChange = newSelectedMonth => {
        setMonth(newSelectedMonth);
        setDate(null);
    };
    const saveForm = () => {

    };
    // #endregion

    return (
        <BookingContext.Provider
            value={{
                state: {
                    selectedMonth,
                    selectedDate,
                    selectedSlot,
                    form,
                    isFormOpen,
                },
                functions: {
                    setDate,
                    setSelectedSlot,
                    setIsFormOpen,
                    setForm,

                    onMonthChange,
                    saveForm,
                },
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export { BookingContext, BookingProvider };
