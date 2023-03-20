import { useEffect, useState } from "react";
import { AppRouter } from "./router/AppRouter"

const LoadingIndicator = () => (
  <div className="loading">
    <img src="/assets/gifs/plate-loading.gif" alt="Loading..." />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      }, 1500);
  }, []);

  return (
    <>
      {
        isLoading 
        ? <LoadingIndicator />
        : <AppRouter />
      }
    </>
  )
}

export default App
