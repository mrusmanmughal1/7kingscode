import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useGetSingleJobDetails() {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const token = localStorage.getItem("data");

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://31.220.22.196:8010/jobs/list/${id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job details.");
        }

        const result = await response.json();
        setLoading(false);

        setJobData(result);
      } catch (error) {
        setError(error.message);
        // console.error("Error fetching job data:", error.message);
        //   } finally {
        //     setLoading(false);
      }
    };

    if (id && token) {
      fetchApi();
    }
  }, [id, token]);

  return { jobData, loading, error };
}

export default useGetSingleJobDetails;
