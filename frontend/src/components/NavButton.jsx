 import { Link } from 'react-router-dom'
 import PropTypes from 'prop-types'

function NavButton (props){
  return (
     <>
     <Link to={props.link}>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold 
      py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
