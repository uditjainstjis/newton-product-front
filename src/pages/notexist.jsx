import '../index.css'
import logo from "../assets/images/logo.svg"

function NotExist() {
    return(
    <>
    <div className="not-found-container section-gap">
      <div className="not-found-content">
        <img src={logo} alt="" srcset="" className='logo' />
        <p className="not-found-text">
          Sorry! The page is not available for small screens.
        </p>
       
      </div>
    </div>
    </>
)
}

export default NotExist;