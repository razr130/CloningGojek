import React from 'react';
import { Text } from 'react-native';

const GoNewsTitle = (props) => {
    return (
        <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15, color: '#1a1a1a' }}>{props.newstitle}</Text>
    )
}
export default GoNewsTitle;


