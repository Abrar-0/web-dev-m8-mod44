import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";

const PriceOption = ({option}) => {
    const{name,price,features} = option
    return (
        <div className='bg-blue-300 rounded-md text-white p-6 text-center flex flex-col'>
            <h2>
                <span className="text-7xl font-extrabold">{price}</span>
                <span className='text-3xl'>$/month</span>
            </h2>
            <h4 className='text-4xl mb-4'>{name}</h4>
            <div className='flex-grow'>
            {
                features.map(feature => <p className='flex items-center gap-2 text-start'><FaCircleCheck className='text-green-300'></FaCircleCheck>{feature}</p>)
            }
            </div>
            <button className='w-full p-3 bg-green-400 hover:bg-green-600 mt-3 rounded-xl font-bold'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
}

export default PriceOption;
