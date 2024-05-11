import React, { useContext } from 'react';

import Picker from '../picker/Picker';
import Card from './Card';

import { UserContext } from '../../contexts/UserContext';

const PickerCard = () => {
    // #region State definition
    const { appointeeUser } = useContext(UserContext);
    // #endregion    

    return (
        <Card>
            <Picker />
        </Card>
    );
}

export default PickerCard;
