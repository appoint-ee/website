import React, { useState, useContext } from 'react';

import { isEmpty } from 'lodash';
import { styled } from '@mui/system';

import SignInUpForm from '../../components/landing/SignInUpForm';
import SlotCreator from '../../components/landing/SlotCreator';
import Booking from '../../components/landing/Booking';

import { UserContext } from '../../contexts/UserContext';

import { redirectToGoogleAuth } from '../../utils/tools/3rdParty';

import componentsStyles from '../../styles/components/componentStyles';
import landingStyles from '../../styles/pages/landingStyles';

// #region Styled Components
const MainContainer = styled('div')({
    ...componentsStyles.mainContainer,
    ...landingStyles.landingPage,
});
const Title = styled('p')(landingStyles.title);
const Action = styled('span')(landingStyles.action);
// #endregion

const Landing = () => {
    // #region State definition
    const { user, appointeeUser } = useContext(UserContext);
    const [ isUserPopupOpen, setIsUserPopupOpen ] = useState(false);
    // #endregion
    
    // #region Component definition
    const actionProps = {
        onClick: () => setIsUserPopupOpen(true),
    };
    const signInUpFormProps = {
        isOpen: isUserPopupOpen,
        close: () => setIsUserPopupOpen(false),
    }
    // #endregion

    return (
        <React.Fragment>
            <MainContainer>
                {
                    isEmpty(appointeeUser) && (
                        <React.Fragment>
                            <Title>
                                Hemen kendi takvmini yarat ve appointment almaya <Action {...actionProps}>başla!</Action>
                            </Title>
                            <SlotCreator />
                        </React.Fragment>
                    )
                }
                { !isEmpty(appointeeUser) && <Booking /> }
            </MainContainer>
            { isEmpty(user) && <SignInUpForm {...signInUpFormProps} /> }
        </React.Fragment>
    );
}

export default Landing;
