import { useState, useEffect } from 'react';

function useDebouned({ delay, value }) {
    const [debounded, setDeounded] = useState(value);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDeounded(value);
        }, delay);

        return () => {
            clearTimeout(timeOut);
        };
    }, [delay, value]);

    return debounded;
}

export default useDebouned;
