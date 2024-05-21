import React, { useContext } from 'react';

import classNames from 'classnames';
import { isEmpty } from 'lodash';

import { styled } from '@mui/system';

import { BookingContext } from '../../contexts/BookingContext';

import { PrimaryButton } from '../form/Button';
import Loading from './Loading';
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
    const { isLoading, timeSlots } = useContext(TimeSlotsContext);
    // #endregion
    
    // #region Component definition
    const isSlotNotSelected = isEmpty(state.selectedSlot);
    
    const nextButtonProps = {
        onClick: () => functions.setIsFormOpen(true),
        disabled: isSlotNotSelected,
        title: isSlotNotSelected ? "Please select a day" : undefined,
        className: classNames({
            disabled: !isSlotNotSelected,
        }),
    };
    // #endregion

    return (
        <Card>
            <Boxes>
                {
                    isEmpty(timeSlots)
                    ? (
                        <div>
                            No time slots available
                        </div>
                    )
                    : (
                        timeSlots
                            .filter(slot => slot.status === "booked" || slot.status === "available")
                            .map((slot, sIndex) => (
                                <Box
                                    key={sIndex}
                                    className={classNames({
                                        booked: slot.status === "booked",
                                        // selected: slot.status === "available",
                                        selected: slot.startTime === state.selectedSlot,
                                    })}
                                    onClick={() => functions.setSlot(slot.startTime)}
                                >
                                    {formatTime(slot.startTime)}
                                </Box>
                            ))
                    )
                }
            </Boxes>
            <PrimaryButton {...nextButtonProps}>
                Next
            </PrimaryButton>
            {isLoading && <Loading />}
        </Card>
    );
}

export default Slots;
