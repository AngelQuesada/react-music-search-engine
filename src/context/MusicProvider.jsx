import { useState } from "react";
import { MusicContext } from "./MusicContext"
import mockedResponse from "./../mocks/resp.json";

export const MusicProvider = ({ children }) => {

  const [ queryResult, setQueryResult ] = useState([]);

  const [ query, setQuery ] = useState('');

  const [ isLoading, setIsLoading ] = useState(false);

  const musicData = {
    query,
    setQuery,
    queryResult,
    setQueryResult,
    isLoading,
    setIsLoading
  }

  return (
      <MusicContext.Provider value={musicData}>
          { children }
      </MusicContext.Provider>
  )
}