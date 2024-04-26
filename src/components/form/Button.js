import React from 'react';

import { styled } from '@mui/system';

import formStyles from '../../styles/components/form/formStyles';

// #region Base
const BaseButton = props => {
    return (
        <button {...props} />
    );
}
// #endregion

// #region Styled Components
const Primary = styled(BaseButton)(formStyles.button.primary);
const Cancel = styled(BaseButton)(formStyles.button.cancel);
// #endregion

export const PrimaryButton = props => {
    return (
        <Primary {...props} />
    );
}

export const CancelButton = props => {
    return (
        <Cancel {...props}>
            Cancel
        </Cancel>
    );
}
