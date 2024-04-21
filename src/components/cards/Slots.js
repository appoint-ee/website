import React, { useState } from 'react';

import classNames from 'classnames';

import { styled } from '@mui/system';

import Card from './Card';

import slotsStyles from '../../styles/components/cards/slotsStyles';

// #region Styled Components
const Boxes = styled('div')(slotsStyles.boxes);
const Box = styled('div')(slotsStyles.box);
const Next = styled('button')(slotsStyles.next);
// #endregion

const Slots = () => {
    // #region State definition
    const availableSlots = [
        {
            start: '08:10',
            end: '08:20',
            isBooked: false,
            isSelected: false,
        },
        {
            start: '08:20',
            end: '08:30',
            isBooked: false,
            isSelected: true,
        },
        {
            start: '08:10',
            end: '08:20',
            isBooked: true,
            isSelected: false,
        },
    ];
    // #endregion

    return (
        <Card>
            <Boxes>
                {
                    availableSlots.map((slot, sIndex) => (
                        <Box
                            key={sIndex}
                            className={classNames({
                                booked: slot.isBooked,
                                selected: slot.isSelected,
                            })}
                        >
                            {slot.start} - {slot.end}
                        </Box>
                    ))
                }
            </Boxes>
            <Next>
                Next
            </Next>
        </Card>
    );
}

export default Slots;
