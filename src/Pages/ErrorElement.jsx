import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
    const error = useRouteError();
    return (
        <div>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorElement;