import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';


const DocTitleOne = () => {
    const [count, setCount] = useState(0)

    // useEffect( () => {
    //     document.title = `Custom Hooks::::Count ${count}`
    // }, [count])

    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount( count +1 )}>Custom Hooks:::: Count - {count}</button>        
        </div>
    );
};

export default DocTitleOne;