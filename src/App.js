import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

import 'react-day-picker/dist/style.css';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  const bookedStyle = { border: '2px solid currentColor' };

  return (
    <DayPicker
      // selected={new Date()}
      onDayClick={(day) => console.log(day)}
      showOutsideDays 
      // fixedWeeks
      // numberOfMonths={2}
      // pagedNavigation
      captionLayout="dropdown"
      fromYear={2015}
      toYear={2025}
      weekStartsOn={1}
      // fixedWeeks={false}
      // showWeekNumber
      // locale="tr"
      // month={new Date()}
      modifiers={{
        // selected: [
        //   {
        //     dayOfWeek: [1],
        //   },
        // ],
        disabled: [
          {
            dayOfWeek: [2],
          },
        ],
        // outside: [
        //   {
        //     dayOfWeek: [3],
        //   },
        // ],
        booked: [
          {
            dayOfWeek: [3],
          }
        ]
      }}
      modifiersStyles={{
        booked: bookedStyle,
      }}
    />
  );
}

export default App;
