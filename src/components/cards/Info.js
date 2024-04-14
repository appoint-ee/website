import React, { useContext } from 'react';

import { styled } from '@mui/styles';

import Card from './Card';

import { UserContext } from '../../contexts/UserContext';

import avatar from '../../assets/images/avatar.png';

import infoStyles from '../../styles/components/cards/infoStyles';

// #region Styled Components
const Header = styled('div')(infoStyles.header);
const Avatar = styled('img')(infoStyles.avatar);
const Detail = styled('ul')(infoStyles.detail);
const Description = styled('div')(infoStyles.description);
// #endregion

const Info = () => {
    // #region State definition
    const { user } = useContext(UserContext);
    // #endregion

    return (
        <Card>
            <Header>
                <Avatar src={user.avatar ?? avatar} alt="avatar" />
                <Detail>
                    <li>
                        {user.name}
                    </li>
                    <li>
                        {user.address}
                    </li>
                    <li>
                        {user.email}
                    </li>
                    <li>
                        {user.phone}
                    </li>
                </Detail>
            </Header>
            <Description>
                <p>
                    {user.description}
                </p>
            </Description>
        </Card>
    );
}

export default Info;
