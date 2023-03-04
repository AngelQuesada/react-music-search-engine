import { useNavbar } from "../hooks/useNavbar"
import logo from "../assets/logo.png";
import { DebounceInput } from "react-debounce-input";
import { useRef } from "react";

export const Navbar = () => {

  const {onInputChange, onClickSearchButton, inputRef } = useNavbar();


  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Music Search Engine" />
            <span className="ms-2">Music Search Engine</span>
          </a>

          <form className="d-flex my-2 my-lg-0">
            <DebounceInput
              minLength={3}
              className="form-control me-sm-2"
              placeholder="Search for music"
              name="query"
              ref={inputRef}
              debounceTimeout={1000}
              onChange={onInputChange}
            />
            <div onClick={onClickSearchButton} className="btn btn-outline-success my-2 my-sm-0" >Search</div>
          </form>

        </div>
    </nav>
    
  )
}
