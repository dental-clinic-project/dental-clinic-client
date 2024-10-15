import { useState, useEffect } from "react";

type ErrorTypeFromServer = {
  status: string;
  message: string;
};

type TeamMember = {
  _id: string;
  name: string;
  years_of_experience: number;
  quote: string;
  position: string;
  imageUrl: string;
};

type TeamResponse = {
  status: string;
  results: number;
  data: {
    team: TeamMember[];
  };
};

export const useGetTeam = () => {
  const [data, setData] = useState<TeamResponse>();
  const [error, setError] = useState<ErrorTypeFromServer>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8000/api/v1/team");

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData);
        setIsLoading(false);
        throw new Error(errorData.message || "Data processing error!");
      }

      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    };

    getData();
  }, []);

  return { data, error, isLoading };
};
