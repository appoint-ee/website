import React, { createContext, useState } from 'react';

const BookingContext = createContext();

const BookingProvider = ({
    children,
}) => {
    // #region State definition
    const [selectedSlot, setSlot] = useState(null);
    const [selectedDate, setDate] = useState(null);
    const [selectedMonth, setMonth] = useState(new Date());
    const [form, setForm] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);
    // #endregion

    // #region Handlers
    const onMonthChange = newSelectedMonth => {
        setMonth(newSelectedMonth);
        setDate(null);
        setSlot(null);
    };
    const onDateChange = newSelectedDate => {
        setDate(newSelectedDate);
        setSlot(null);
    };
    const saveForm = () => {

    };
    // #endregion

    return (
        <BookingContext.Provider
            value={{
                state: {
                    selectedSlot,
                    selectedMonth,
                    selectedDate,
                    form,
                    isFormOpen,
                },
                functions: {
                    setSlot,
                    setIsFormOpen,
                    setForm,

                    onDateChange,
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
