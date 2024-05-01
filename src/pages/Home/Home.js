import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { isEmpty } from 'lodash';

import { styled } from '@mui/system';

import InfoCard from '../../components/cards/Info';
import PickerCard from '../../components/cards/Picker';
import SlotsCard from '../../components/cards/Slots';

import { UserContext } from '../../contexts/UserContext';

import homeStyles from '../../styles/pages/homeStyles';

// #region Styled Components
const MainContainer = styled('div')(homeStyles.mainContainer);

const Title = styled('p')(homeStyles.title);
const Start = styled('span')(homeStyles.start);

const PickerBody = styled('div')(homeStyles.pickerBody);
const Separator = styled('div')(homeStyles.separator);
// #endregion

const Home = () => {
    // #region State definition
    const { user, setUser } = useContext(UserContext);
    // #endregion
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    
    useEffect(() => {
        if (code) {
            const fetchData = async () => {
                const url = 'https://oauth2.googleapis.com/token';
                const params = new URLSearchParams({
                    client_id: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,  
                    client_secret: process.env.REACT_APP_GOOGLE_API_CLIENT_SECRET,  
                    code: code,
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost:3000',
                });

                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: params.toString(),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        
                        console.log(data);
                        
                        // Here you might want to update your context or perform other actions
                        setUser({
                            name: 'John Doe',
                            address: 'İstanbul',
                            email: 'j@j.com',
                            phone: '555 444 33 22',
                            description: 'Müthiş bir girişim fikriniz mi var?\nGelin konuşalım. \nUzman ekibimiz ile neden\nbatacağınızı anlatalım.',
                        })
                    } else {
                        console.error('HTTP error', response.status, await response.text());
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            };

            fetchData();
        }
    }, [code]);
    
    // #region Component definition
    const startProps = {
        onClick: () => redirectToGoogleAuth()
    };
    const pickerBodyProps = {
        className: isEmpty(user) ? 'initial' : 'open',
    };
    // #endregion

    return (
        <MainContainer>
            <Title>
                Hemen kendi takvmini yarat ve appointment almaya <Start {...startProps}>başla!</Start>
            </Title>
            <PickerBody {...pickerBodyProps}>
                <InfoCard />
                <Separator />
                <PickerCard />
                <Separator />
                <SlotsCard />
            </PickerBody>
        </MainContainer>
    );
}

const redirectToGoogleAuth = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?&` +
        `client_id=${process.env.REACT_APP_GOOGLE_API_CLIENT_ID}&` +
        `response_type=code&` +
        `scope=https://www.googleapis.com/auth/calendar+https://www.googleapis.com/auth/calendar.events+https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/user.birthday.read&` +
        `access_type=offline&` +
        `include_granted_scopes=true&` +
        "redirect_uri=http://localhost:3000";
}

export default Home;
