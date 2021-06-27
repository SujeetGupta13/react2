import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../../App';


//This is the example of Context API without useContext Hook. Consumer code is not that good and with multiple context it becomes lenghthy.
const ComponentF = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>
                                                User context value {user}, Channel context value {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
            
        </div>
    );
};

export default ComponentF;