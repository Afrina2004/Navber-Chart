import PropTypes from 'prop-types'
import {AiFillCheckCircle} from 'react-icons/ai'

const Features = ({features}) => {
    return (
        <div className=''>
            <p className='flex items-center p-2'><AiFillCheckCircle className='text-green-700'>
                </AiFillCheckCircle> {features}</p>
        </div>
    );
};
  Features.propTypes ={
    features:PropTypes.string
  } 


export default Features;