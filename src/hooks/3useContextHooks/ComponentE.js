import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';
import ComponentF from './ComponentF';


//With useConext hooks only consumer codes changes, Context creation and Valu provider remains same. 
//this component has been chosne for useContext Hoooks. we have left ComponentF .
const ComponentE = () => {

    const user = useContext(UserContext) //useContext returns the context value
    const channel = useContext(ChannelContext)
    return (
        <div>
            Context using useContext Hooks {user} - {channel}
            <ComponentF />
        </div>
    );
};

export default ComponentE;