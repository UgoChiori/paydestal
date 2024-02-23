import React from 'react';

type ErrorFallbackProps = {
    error: Error;
    resetErrorBoundary: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div>
            <h2>Oops! Something went wrong.</h2>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    );
};

export default ErrorFallback;