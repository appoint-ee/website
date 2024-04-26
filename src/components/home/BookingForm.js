import React from 'react';

import { SwipeableDrawer } from '@mui/material';
import { styled } from '@mui/system';

// #region Styled Components
// #endregion

const BookingForm = () => {
    // #region Component definition
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const drawerProps = {
        disableBackdropTransition: !iOS,
        disableDiscovery: iOS,
        open: true,
    };
    // #endregion

    return (
        <SwipeableDrawer {...drawerProps}>Test</SwipeableDrawer>
    );
}

export default BookingForm;
