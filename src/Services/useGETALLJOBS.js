import { useEffect, useState } from "react";
import axios from "axios";

const useGETALLJOBS = (active) => {
  const [joblisting, setJobListing] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("data");
      try {
        // Construct the URL with the active filter if it's not empty
        const url = active
          ? `http://31.220.22.196:8010/jobs/list/?is_active=${active}`
          : `http://31.220.22.196:8010/jobs/list/`;

        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        setJobListing(response.data.results);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [active]);

  return { joblisting, error };
};

export default useGETALLJOBS;
