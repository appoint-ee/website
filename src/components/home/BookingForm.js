import React, { useContext } from 'react';

import { SwipeableDrawer } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

import { BookingContext } from '../../contexts/BookingContext';
import { UserContext } from '../../contexts/UserContext';

import { CancelButton, PrimaryButton } from '../form/Button';

import avatar from '../../assets/images/avatar.png';

import bookingFormStyles from '../../styles/components/home/bookingFormStyles';

// #region Styled Components
const Header = styled('div')(bookingFormStyles.header);
const Title = styled('span')(bookingFormStyles.title);
const Body = styled('fiv')(bookingFormStyles.body);
const Detail = styled('div')(bookingFormStyles.detail);
const Form = styled('div')(bookingFormStyles.form);
const Footer = styled('div')(bookingFormStyles.footer);
// #endregion

const BookingForm = ({
    handlerOnClose,
}) => {
    // #region State definition
    const { user } = useContext(UserContext);
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
            <Header>
                <Title>
                    Son Adım
                </Title>
            </Header>
            <Body>
                <Detail>
                    <img src={user.avatar ?? avatar} alt="avatar" />
                    <ul>
                        <li>
                            Jhon Doe
                        </li>
                        <li>
                            24.04.2024 10:00
                        </li>
                        <li>
                            Konum
                        </li>
                    </ul>
                </Detail>
                <Form> 
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        fullWidth
                        rows={4}
                        maxRows={4}
                    />
                </Form>
            </Body>
            <Footer>
                <CancelButton />
                <PrimaryButton>
                    Save
                </PrimaryButton>
            </Footer>
        </SwipeableDrawer>
    );
}

export default BookingForm;
