import { useContext, useEffect } from "react"
import { getTracks } from "../api/lastFmApi";
import { MusicContext } from "../context/MusicContext"
import { MusicElement } from "./MusicElement"

export const MusicList = () => {

  const { setIsLoading, query, setQueryResult, queryResult } = useContext( MusicContext );

  useEffect( ()=> {

    if (query.length < 3) return;

    setIsLoading(true);

    const ueGetTracks = async () => {
      const tracks = await getTracks(query);
      setQueryResult(tracks);
    
      setIsLoading(false);
    }

    ueGetTracks();

  }, [query])

  return (
    <>
      <div style={{minHeight:'calc( 100vh - 70px )'}}className="container h-100">
        <div className="row">
            {
              queryResult.length === 0 
              ? <h2 className="mt-3">No results found </h2>
              : queryResult.map( (track, index) => {
                return (
                  <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-2">
                    <MusicElement {...track} />
                  </div>
                )
              })
            }
        </div>
      </div>
    </>
  )
}
