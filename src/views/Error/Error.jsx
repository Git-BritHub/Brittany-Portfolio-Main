import { useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error">
            <Helmet>
                <title>Error - Brittany Brimley Portfolio</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            {/* TODO: add funny image and link to return to homepage */}
            <h1 className="py-5 mt-5">Ruh Roh...</h1>
            <p>An unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}