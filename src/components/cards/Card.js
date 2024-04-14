import React from 'react';

import { styled } from '@mui/styles';

import cardStyles from '../../styles/components/cards/cardStyles';

// #region Styled Components
const MainContainer = styled('div')(cardStyles.mainContainer);
// #endregion

const Info = props => <MainContainer {...props}></MainContainer>;

export default Info;
