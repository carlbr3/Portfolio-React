import { useRouteError } from 'react-router-dom';
import { useEffect } from 'react';

export default function ErrorPage() {
  useEffect(() => {
    document.title = "Error!";
}, []);
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <h1>Error!</h1>
        <p>Something went wrong.</p>
    </div>
    );

}