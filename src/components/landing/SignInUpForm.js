import React, { useState } from 'react';

import { InputAdornment, OutlinedInput, IconButton, InputLabel, Select, MenuItem, FormControl, FormHelperText, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
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
const Back = styled(Grid)(signInUpFormStyles.back);
const Widget = styled(Grid)(signInUpFormStyles.widget);
const Circle = styled(Grid)(signInUpFormStyles.circle);
// #endregion

const SignInUpForm = ({
    isOpen,
    close,
}) => {
    // #region State definition
    const [ activeTab, setActiveTab ] = useState("signIn");
    const [ widgetStep, setWidgetStep ] = useState("login");
    const [ showPassword, setShowPassword ] = useState(false);  
    // #endregion

    // #region Handlers
    const handleClickShowPassword = () => setShowPassword(show => !show);
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    const handleMouseUpPassword = event => {
        event.preventDefault();
    };
    // #endregion
    
    // #region Component definition
    const mainContainerProps = {
        className: isOpen ? "open" : "initial",
    };
    const txtEmailProps = {
        id: "txtEmail",
        label: "E-mail",
        fullWidth: true,
    };
    const passwordVisibilityIconProps = {
        "aria-label": "toggle password visibility",
        onClick: handleClickShowPassword,
        onMouseDown: handleMouseDownPassword,
        onMouseUp: handleMouseUpPassword,
        edge: "end"
    };
    const txtPasswordProps = {
        id: "txtPassword",
        label: "Password",
        fullWidth: true,
        type: showPassword ? "text" : "password",
        endAdornment: (
            <InputAdornment position="end">
                <IconButton {...passwordVisibilityIconProps}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        ),
    };
    const loginButtonProps = {
        children: "Giriş yap",
        onClick: () => {
            alert("Giriş yap");
            close();
        },
    };

    const txtFirstLastNameProps = {
        id: "txtFirstLastName",
        label: "First last name",
        fullWidth: true,
    };
    const lblCountryProps = {
        labelId: "lblCountry",
        id: "lblCountry",
        value: 10,
        label: "Ülke",
        // onChange}
    };
    const lblCityProps = {
        labelId: "lblCity",
        id: "lblCity",
        value: 10,
        label: "Şehir",
        // onChange}
    };
    const txtPhoneProps = {
        id: "txtPhone",
        label: "Telefon",
        fullWidth: true,
        startAdornment: (
            <InputAdornment position="start">
                <LocalPhoneIcon />
            </InputAdornment>
        ),
    };
    const widgetLoginButtonProps = {
        children: "İleri",
        onClick: () => setWidgetStep("detail"),
    };
    const widgetDetailButtonProps = {
        children: "Kaydet",
        onClick: () => alert("Kaydet"),
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
                                            Google ile giriş yap
                                        </div>
                                    </Google>
                                </Grid>
                                <Or item xs={12}>
                                    <Line />
                                    Or
                                    <Line />
                                </Or>
                                <Grid item xs={12}>
                                    <TextField {...txtEmailProps} />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="txtPassword">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput {...txtPasswordProps} />
                                    </FormControl>
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
                    {
                        activeTab === "signUp" && widgetStep === "login" && (
                            <React.Fragment>
                                <Grid item xs={12}>
                                    <Google>
                                        <img src={googleLogo} alt="Google-Login" />
                                        <div>
                                            Google ile kayıt ol
                                        </div>
                                    </Google>
                                </Grid>
                                <Or item xs={12}>
                                    <Line />
                                    Or
                                    <Line />
                                </Or>
                                <Grid item xs={12}>
                                    <TextField {...txtEmailProps} />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="txtPassword">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput {...txtPasswordProps} />
                                        <FormHelperText>
                                            Şifre büyük küçük harf içermelidir    
                                        </FormHelperText>
                                    </FormControl>
                                </Grid> 
                                <Widget item xs={12}>
                                    <Circle className="active" />
                                    <Circle />
                                </Widget>
                                <Grid item xs={12}>                            
                                    <PrimaryButton {...widgetLoginButtonProps} />
                                </Grid>
                            </React.Fragment>
                        )
                    }
                    {                        
                        activeTab === "signUp" && widgetStep === "detail" && (
                            <React.Fragment>
                                <Back item xs={12} onClick={() => setWidgetStep("login")}>
                                    <ArrowBackIcon />Geri
                                </Back>
                                <Grid item xs={12}>
                                    <TextField {...txtFirstLastNameProps} />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="lblCountry">
                                            Ülke
                                        </InputLabel>
                                        <Select {...lblCountryProps}>
                                            <MenuItem value={10}>
                                                Türkiye
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                İngiltere
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Almanya
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="lblCity">
                                            Şehir
                                        </InputLabel>
                                        <Select {...lblCityProps}>
                                            <MenuItem value={10}>
                                                İstanbul
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Ankara
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                İzmir
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="txtPhone">
                                            Phone
                                        </InputLabel>
                                        <OutlinedInput {...txtPhoneProps} />
                                    </FormControl>
                                </Grid>
                                <Widget item xs={12}>
                                    <Circle />
                                    <Circle className="active" />
                                </Widget>
                                <Grid item xs={12}>
                                    <PrimaryButton {...widgetDetailButtonProps} />
                                </Grid>
                            </React.Fragment>
                        )
                    }
                </Form>
            </Container>
        </MainContainer>
    );
}

export default SignInUpForm;
