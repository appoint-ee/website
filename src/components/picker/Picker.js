import React from 'react';

import { styled } from '@mui/system';

import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

// #region Styled Components
const StyledPicker = styled(DayPicker)({
    "& .rdp-button:hover:not([disabled]):not(.rdp-day_selected)": {
        color: "black",
    },
});
// #endregion

const Picker = ({ modifiers, ...props }) => {
    // #region Components definition
    // let footer = <p>Please pick a day.</p>;
    // if (selected) {
    //     footer = <p>You picked {format(selected, 'PP')}.</p>;
    // }

    const currentYear = new Date().getFullYear();
    const datePickerProps = {
        // onDayClick: day => console.log(day),
        showOutsideDays: true,
        // fixedWeeks: true,
        // numberOfMonths: 2,
        // pagedNavigation: true,
        captionLayout: "dropdown",
        fromYear: currentYear,
        toYear: currentYear + 3,
        weekStartsOn: 1,
        // fixedWeeks: false,
        // showWeekNumber: tre,
        // locale: "tr",
        // month: new Date(),
        modifiers: {
            disabled: [
                {
                    dayOfWeek: [2],
                },
            ],
            booked: [
                {
                    dayOfWeek: [3],
                },
            ],
        },
        modifiersStyles: {
            booked: {
                backgroundColor: '#80808073',
                color: '#ffffff80',
            },
            selected: {
                backgroundColor: '#a52a2a94',
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
                color: "red",
            },
            dropdown: {
                color: "blue",
            },
        },
        ...props,
    };
    // #endregion

    return (
        <StyledPicker {...datePickerProps} />
    );
}

export default Picker;
