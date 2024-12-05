import '../index.css'
import logo from "../assets/images/404vect.png"

function NotExist() {
    return(
    <>
    <div className="not-found-container section-gap">
      <div className="not-found-content">
        <img src={logo} alt="" srcset="" className='logo' />
        <p className="not-found-text">
          We don't support small screens currently!
        </p>
        <p className="not-found-subtext">
          Switch to desktop for a better viewing experience.
        </p>
       
      </div>
    </div>
    </>
)
}

export default NotExist;