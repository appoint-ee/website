import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { styled } from '@mui/system';

import { PrimaryButton } from '../form/Button';

import signInUpFormStyles from '../../styles/components/landing/signInUpFormStyles';
import componentsStyles from '../../styles/components/componentStyles';

import googleLogo from '../../assets/images/Google-Logo.png';

// #region Styled Components
const MainContainer = styled('div')({
    ...componentsStyles.mainContainer,
    ...signInUpFormStyles.overlay,
});
const Container = styled('div')(signInUpFormStyles.container);
const Header = styled('div')(signInUpFormStyles.header);
const Title = styled('span')(signInUpFormStyles.title);
const Form = styled(Grid)(signInUpFormStyles.form);
const Google = styled('div')(signInUpFormStyles.google);
const Or = styled(Grid)(signInUpFormStyles.or);
const Line = styled(Grid)(signInUpFormStyles.line);
const Link = styled(Grid)(signInUpFormStyles.link);
// #endregion

const SignInUpForm = ({
    isOpen,
    close,
}) => {
    // #region State definition
    const [ activeTab, setActiveTab ] = useState("signIn");
    // #endregion
    
    // #region Component definition
    const mainContainerProps = {
        className: isOpen ? "open" : "initial",
    };
    const txtUserNameProps = {
        id: "txtUserName",
        label: "User Name",
        variant: "outlined",
        fullWidth: true,
        slotProps: {
            inputLabel: {
                shrink: true,
            },
        },
    };
    const txtPasswordProps = {
        id: "txtPassword",
        label: "Password",
        variant: "outlined",
        fullWidth: true,
    };
    const loginButtonProps = {
        children: "Giriş yap",
        onClick: () => {
            alert("Giriş yap");
            close();
        },
    };
    // #endregion

    return (
        <MainContainer {...mainContainerProps}>
            <Container>
                <Header>
                    <Title className={activeTab === "signIn" ? "active" : ""} onClick={() => setActiveTab("signIn")}>
                        Giriş yap
                    </Title>
                    <Title className={activeTab === "signUp" ? "active" : ""} onClick={() => setActiveTab("signUp")}>
                        Kayıt ol
                    </Title>
                </Header>
                <Form container spacing={5}>
                    {
                        activeTab === "signIn" && (
                            <React.Fragment>
                                <Grid item xs={12}>
                                    <Google>
                                        <img src={googleLogo} alt="Google-Login" />
                                        <div>
                                            Google ile Giriş Yap
                                        </div>
                                    </Google>
                                </Grid>
                                <Or item xs={12}>
                                    <Line />
                                    Or
                                    <Line />
                                </Or>
                                <Grid item xs={12}>
                                    <TextField {...txtUserNameProps} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField {...txtPasswordProps} />
                                </Grid>
                                <Grid item xs={12}>                            
                                    <FormControlLabel control={<Checkbox />} label="Beni hatırla" />
                                </Grid>
                                <Grid item xs={12}>                            
                                    <PrimaryButton {...loginButtonProps} />
                                </Grid>
                                <Link item xs={12}>                            
                                    <a href="#forgot-password">
                                        Şifremi hatırlamıyorum
                                    </a>
                                </Link>
                            </React.Fragment>
                        )
                    }
                </Form>
            </Container>
        </MainContainer>
    );
}

export default SignInUpForm;
