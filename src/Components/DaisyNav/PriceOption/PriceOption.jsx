import PropTypes from 'prop-types';
import Features from '../../Features/Features';

const PriceOption = ({option}) => {


    const {name,price,features} = option ;
    return (
        <div className='bg-orange-500 border-2px rounded-md p-4 text-white flex flex-col justify-center'>
           <h1 className='text-center'>
            <span className='text-6xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/mon</span>
            
            </h1> 
            <h3 className='text-5xl my-8 font-bold pl-8'>{name}</h3>
           <div className='pl-6 flex-grow text-xl '>
           {
          features.map((features, idx) => <Features key={idx} features= {features} />)
          }
           </div>
          <button className='mt-12 bg-green-700 text-white w-full py-2 font-bold rounded-lg hover:bg-green-900 '>Buy Now</button> 
                   </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
}


export default PriceOption;