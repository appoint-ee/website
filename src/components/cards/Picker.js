import React, { useContext } from 'react';

import { DayPicker } from 'react-day-picker';

import { styled } from '@mui/system';

import { BookingContext } from '../../contexts/BookingContext';
import { DaySlotsContext } from '../../contexts/DaySlotsContext';

import Loading from './Loading';
import Card from './Card';

import 'react-day-picker/dist/style.css';

// #region Styled Components
const StyledPicker = styled(DayPicker)({
    "& .rdp-button:hover:not([disabled]):not(.rdp-day_selected)": {
        color: "black",
    },
});
// #endregion

const PickerCard = () => {
    // #region State definition
    const { state, functions } = useContext(BookingContext);
    const { isLoading, daySlots } = useContext(DaySlotsContext);
    // #endregion

    // #region Components definition
    let disabledDates = daySlots
        .filter(daySlot => daySlot.status === "Not Available")
        .map(daySlot => new Date(daySlot.dateTime));
    
    const currentYear = new Date().getFullYear();
    const datePickerProps = {
        onMonthChange: functions.onMonthChange,
        month: state.selectedMonth,
        onDayClick: functions.setDate,
        selected: state.selectedDate,
        showOutsideDays: false,
        captionLayout: "dropdown",
        fromYear: currentYear,
        toYear: currentYear + 3,
        weekStartsOn: 1,
        disabled: disabledDates,
        modifiersStyles: {
            booked: {
                backgroundColor: "#80808073",
                color: "#ffffff80",
            },
            selected: {
                backgroundColor: "#a52a2a94",
            },
        },
        styles: {
            head_cell: {
                width: "60px",
            },
            table: {
                maxWidth: "none",
            },
            day: {
                margin: "auto",
            },
            dropdown_month: {
                // color: "red",
            },
            dropdown: {
                // color: "blue",
            },
        },
    };
    // #endregion

    return (
        <Card>
            <StyledPicker {...datePickerProps} />
            {isLoading && <Loading />}
        </Card>
    );
}

export default PickerCard;
