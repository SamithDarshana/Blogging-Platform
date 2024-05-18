 import { Link } from 'react-router-dom'
 import PropTypes from 'prop-types'

function NavButton (props){
  return (
     <>
     <Link to={props.link}>
          <button
            className=" hover:bg-custom-750 hover:text-white text-custom-400 font-bold 
      py-2 px-4 rounded focus:outline-none focus:shadow-outline h-8 flex items-center transition duration-500 ease-in-out"
          >
            {props.text}
          </button>
        </Link>
     </>
  )
}

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default NavButton
