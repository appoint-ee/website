import React, { useContext } from 'react';

import { SwipeableDrawer } from '@mui/material';
import { styled } from '@mui/system';

import { BookingContext } from '../../contexts/BookingContext';

import { CancelButton, PrimaryButton } from '../form/Button';

const BookingForm = ({
    handlerOnClose,
}) => {
    // #region State definition
    const { state, functions } = useContext(BookingContext);
    // #endregion

    // #region Component definition
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const drawerProps = {
        disableBackdropTransition: !iOS,
        disableDiscovery: iOS,
        anchor: "right",
        open: state.isFormOpen,
        onClose: () => {
            functions.setIsFormOpen(false);
            handlerOnClose();
        },
        PaperProps: {
            sx: {
                width: "30%",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            },
        },
    };
    // #endregion

    return (
        <SwipeableDrawer {...drawerProps}>
            <div>
                <span>Son Adım</span>
                <hr />Detail
            </div>
            <div>
                Form
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <CancelButton />
                <PrimaryButton>
                    Save
                </PrimaryButton>
            </div>
        </SwipeableDrawer>
    );
}

export default BookingForm;
