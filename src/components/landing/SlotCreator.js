import React, { useContext } from 'react';

import { isEmpty } from 'lodash';
import { styled } from '@mui/system';

import { UserContext } from '../../contexts/UserContext';

import slotCreatorStyles from '../../styles/components/landing/slotCreatorStyles';
import componentStyles from '../../styles/components/componentStyles';

// #region Styled Components
const Conitaner = styled('div')({
    ...componentStyles.slidingBody,
    ...slotCreatorStyles.creator,
});
// #endregion

const SlotCreator = () => {
    // #region State definition
    const { user } = useContext(UserContext);
    // #endregion
    
    // #region Component definition
    const bodyProps = {
        className: isEmpty(user) ? 'initial' : 'open',
    };
    // #endregion

    return (
        <Conitaner {...bodyProps}>
            <div style={{ flexGrow: 1, backgroundColor: 'red' }}>
                Slot oluşturma
            </div>
            <div style={{ flexGrow: 1, backgroundColor: 'blue' }}>
                Slot oluşturma
            </div>
        </Conitaner>
    );
}

export default SlotCreator;
