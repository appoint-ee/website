import React, { useContext } from 'react';

import classNames from 'classnames';

import { styled } from '@mui/system';

import { BookingContext } from '../../contexts/BookingContext';

import { PrimaryButton } from '../form/Button';
import Card from './Card';

import slotsStyles from '../../styles/components/cards/slotsStyles';

// #region Styled Components
const Boxes = styled('div')(slotsStyles.boxes);
const Box = styled('div')(slotsStyles.box);
// #endregion

const Slots = () => {
    // #region State definition
    const { state, functions } = useContext(BookingContext);

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
    
    // #region Component definition
    const nextButtonProps = {
        onClick: () => {
            // TODO: Validate is a slot selected or not.
            functions.setIsFormOpen(true);
        }
    };
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
            <PrimaryButton {...nextButtonProps}>
                Next
            </PrimaryButton>
        </Card>
    );
}

export default Slots;
