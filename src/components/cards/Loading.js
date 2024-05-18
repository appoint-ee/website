import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

import loadingStyles from '../../styles/components/cards/loadingStyles';

// #region Styled Components
const MainContainer = styled('div')(loadingStyles.mainContainer);
// #endregion

const Loading = props => (
    <MainContainer {...props}>
        <CircularProgress />
    </MainContainer>
);

export default Loading;
