import React, { useContext } from 'react';

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
const Seperator = styled('div')(homeStyles.seperator);
// #endregion

const Home = () => {
    // #region State definition
    const { user, setUser } = useContext(UserContext);
    // #endregion

    // #region Component definition
    const startProps = {
        onClick: () => setUser({
            name: 'John Doe',
            address: 'İstanbul',
            email: 'j@j.com',
            phone: '555 444 33 22',
            description: 'Müthiş bir girişim fikriniz mi var?\nGelin konuşalım. \nUzman ekibimiz ile neden\nbatacağınızı anlatalım.',
        }),
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
                <Seperator />
                <PickerCard />
                <Seperator />
                <SlotsCard />
            </PickerBody>
        </MainContainer>
    );
}

export default Home;
