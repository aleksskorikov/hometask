import React, {useState, useEffect} from 'react'
import ErrorPage from './ErrorPage';

const ErrorBoundary = ({children}) => {
    const [hasError, sethasError] = useState(false);

    useEffect(() => {
        const Error = (error, errorinfo) => {
            console.error(`У вас проблема ${error, errorinfo}`);
            sethasError(true);
        };
        window.addEventListener('error', Error);
        return () => {
            window.removeEventListener('error', Error);
        }
    }, []);

    if (hasError) {
        return <ErrorPage />;
    }
    return children;
}

export default ErrorBoundary;







