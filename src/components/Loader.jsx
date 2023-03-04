import { useContext } from "react"
import { ThreeDots } from "react-loader-spinner"
import { MusicContext } from "../context/MusicContext";


export const Loader = () => {

  const { isLoading } = useContext( MusicContext );

  return (
    <div className={`${ isLoading ? '' : 'd-none' } loader`}>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#F7315C" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  )
}
