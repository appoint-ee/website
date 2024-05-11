import React, { useContext } from 'react';

import classNames from 'classnames';

import { styled } from '@mui/system';

import { BookingContext } from '../../contexts/BookingContext';

import { PrimaryButton } from '../form/Button';
import Card from './Card';

import slotsStyles from '../../styles/components/cards/slotsStyles';

import { TimeSlotsContext } from "../../contexts/TimeSlotsContext";

import { formatTime } from '../../utils/tools/date';

// #region Styled Components
const Boxes = styled('div')(slotsStyles.boxes);
const Box = styled('div')(slotsStyles.box);
// #endregion

const Slots = () => {
    // #region State definition
    const { state, functions } = useContext(BookingContext);
    const { timeSlots } = useContext(TimeSlotsContext);
    // #endregion
    
    // #region Component definition
    const nextButtonProps = {
        onClick: () => {
            // TODO: Validate is a slot selected or not.
            functions.setIsFormOpen(true);
        },
    };
    // #endregion

    return (
        <Card>
            <Boxes>
                {
                    timeSlots
                    ? (
                        timeSlots.map((slot, sIndex) => (
                            <Box
                                key={sIndex}
                                className={classNames({
                                    booked: slot.status === "booked",
                                    selected: slot.status === "available",
                                })}
                            >
                                {formatTime(slot.startTime)}
                            </Box>
                        ))
                    )
                    : (
                        <div>No time slots available</div>
                    )
                }
            </Boxes>
            <PrimaryButton {...nextButtonProps}>
                Next
            </PrimaryButton>
        </Card>
    );
}

export default Slots;
