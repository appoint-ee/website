import React, { useContext } from 'react';

import { format } from 'date-fns';

import { SwipeableDrawer, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

import { BookingContext } from '../../contexts/BookingContext';
import { UserContext } from '../../contexts/UserContext';

import { CancelButton, PrimaryButton } from '../form/Button';

import dateConstants from '../../constants/date';

import { formatTime } from '../../utils/tools/date';

import bookingFormStyles from '../../styles/components/home/bookingFormStyles';
import avatar from '../../assets/images/avatar.png';

// #region Styled Components
const Header = styled('div')(bookingFormStyles.header);
const Title = styled('span')(bookingFormStyles.title);
const Body = styled('div')(bookingFormStyles.body);
const Detail = styled('div')(bookingFormStyles.detail);
const Form = styled('div')(bookingFormStyles.form);
const Footer = styled('div')(bookingFormStyles.footer);
// #endregion

const BookingForm = () => {
    // #region State definition
    const { appointeeUser } = useContext(UserContext);
    const { state, functions } = useContext(BookingContext);    
    // #endregion

    // #region Component definition
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const drawerProps = {
        disableBackdropTransition: !iOS,
        disableDiscovery: iOS,
        anchor: "right",
        open: state.isFormOpen,
        onOpen: (...args) => console.log("onOpen", args),
        onClose: () => functions.setIsFormOpen(false),
        PaperProps: {
            sx: {
                width: "30%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            },
        },
    };
    const txtTitleProps = {
        id: "txtTitle",
        label: "Title",
        variant: "outlined",
        fullWidth: true,
    };
    const txtDescriptionProps = {
        id: "txtDescription",
        label: "Description",
        multiline: true,
        fullWidth: true,
        rows: 4,
    };
    const cancelButtonProps = {
        onClick: () => functions.setIsFormOpen(false),
    };
    const saveButtonProps = {
        children: "Save",
        onClick: functions.saveForm,
    };
    // #endregion

    return (
        <SwipeableDrawer {...drawerProps}>
            <Header>
                <Title>
                    Last step
                </Title>
            </Header>
            <Body>
                <Detail>
                    <img src={appointeeUser.avatar ?? avatar} alt="avatar" />
                    <ul>
                        <li>
                            {appointeeUser.name}
                        </li>
                        <li>
                            {state.selectedDate && format(state.selectedDate, dateConstants.format)} {formatTime(state.selectedSlot)}
                        </li>
                        <li>
                            {appointeeUser.emailAddress} & {appointeeUser.phoneNumber}
                        </li>
                    </ul>
                </Detail>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField {...txtTitleProps} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField {...txtDescriptionProps} />
                        </Grid>
                    </Grid>
                </Form>
            </Body>
            <Footer>
                <CancelButton {...cancelButtonProps} />
                <PrimaryButton {...saveButtonProps} />
            </Footer>
        </SwipeableDrawer>
    );
}

export default BookingForm;
