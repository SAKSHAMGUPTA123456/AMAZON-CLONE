import { useState, useEffect } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Turkeybreast } from "./turkeybreatsapi"; // Your query function

const queryClient = new QueryClient(); // Create QueryClient instance outside of the component

export const Turkey = () => {
  const [errorss, set] = useState(true);

  // Use useQuery inside Turkey component
  const { data, isError, isLoading } = useQuery({
    queryKey: ["key"],
    queryFn: Turkeybreast,
    staleTime: 5000
  });



  useEffect(() => {
    setTimeout(() => {
      set(false);
    }, 1000);
  }, []);
  console.log(data);
  if (errorss) {
    return <h1>Loading content...</h1>;
  }

  if (isLoading) {
    return <h1>Loading data from API...</h1>;
  }

  if (isError) {
    return <h1>Error loading data!</h1>;
  }

  return (
  <>
{data?.map((curr)=><h1>hello</h1>)}
   </>
  );
};
