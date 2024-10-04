import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Redirect() {
  const { urlId } = useParams();

  useEffect(() => {
    const fetchRedirect = async () => {
      try {
        window.location.href = `http://localhost:8080/${urlId}`;
      } catch (error) {
        console.error("Error during redirection:", error);
      }
    };

    fetchRedirect();
  }, [urlId]);

  return null;
}
