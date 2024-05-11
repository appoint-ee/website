import React, { useContext } from 'react';

import { styled } from '@mui/system';

import Card from './Card';

import { UserContext } from '../../contexts/UserContext';

import avatar from '../../assets/images/avatar.png';

import infoStyles from '../../styles/components/cards/infoStyles';

// #region Styled Components
const CardContainer = styled('div')(infoStyles.cardContainer);
const Avatar = styled('img')(infoStyles.avatar);
const Name = styled('span')(infoStyles.name);
const Separator = styled('hr')(infoStyles.separator);
const Detail = styled('div')(infoStyles.detail);
const Description = styled('div')(infoStyles.description);
// #endregion

const Info = () => {
    // #region State definition
    const { getOperableUser } = useContext(UserContext);
    const user = getOperableUser();
    // #endregion

    return (
        <CardContainer>
            <Card style={infoStyles.cardPosition}>
                <Avatar src={user.avatar ?? avatar} alt="avatar" />
                <Name>
                    {user.name}
                </Name>
                <Separator />
                <Description>
                    <p>
                        {user.description}
                    </p>
                </Description>
                <Detail>
                    <span>
                        {user.address}
                    </span>
                    <span>
                        {user.emailAddress}
                    </span>
                    <span>
                        {user.phoneNumber}
                    </span>
                </Detail>
            </Card>
        </CardContainer>
    );
}

export default Info;
