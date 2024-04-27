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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            },
        },
    };
    // #endregion

    return (
        <SwipeableDrawer {...drawerProps}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#a52a2a94",
                borderBottom: "1px solid rgba(62, 56, 56, 0.29)",
                boxShadow: "#00000096 0px 4px 10px 1px",
            }}>
                <span 
                    style={{
                        fontSize: "36px",
                        margin: "20px 0px 20px 0px",
                        color: "rgb(255 255 255 / 64%)",
                    }}
                >
                    Son Adım
                </span>
            </div>
            <div>
                Detail
            </div>
            <div>
                Form
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "20px",
                    borderTop: "1px solid rgba(62, 56, 56, 0.29)",
                    boxShadow: "rgba(0, 0, 0, 0.59) 0px 0px 10px 1px",
                }}
            >
                <CancelButton />
                <PrimaryButton>
                    Save
                </PrimaryButton>
            </div>
        </SwipeableDrawer>
    );
}

export default BookingForm;
