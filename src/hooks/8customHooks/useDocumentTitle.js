import {useEffect} from 'react';

const useDocumentTitle = (count) => {

    useEffect( () => {
        document.title = `Custom Hooks::::Count ${count}`
    }, [count])
};

export default useDocumentTitle;