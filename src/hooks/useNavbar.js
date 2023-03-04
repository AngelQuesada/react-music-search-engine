import { useContext, useRef } from "react"
import { MusicContext } from "../context/MusicContext";

export const useNavbar = () => {

    const { setQuery } = useContext(MusicContext);

    const inputRef = useRef();

    const onInputChange = ({target:{value}}) => {
        setQuery(value)
    }

    const onClickSearchButton = () => {
        setQuery(inputRef.current.state.value);
    }

    return {
        onInputChange,
        inputRef,
        onClickSearchButton
    }
}
