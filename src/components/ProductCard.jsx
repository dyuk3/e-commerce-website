import { Link } from 'react-router-dom';

const ProductCard = ({ productInfo }) => {
  const { image, id, title, price } = productInfo;

  return (
    //link to product Info
    <Link className='' to={`/products/${id}`}>
      <div className=' w-full p-4  flex flex-col '>
        <img className=' w-full h-60 object-contain' src={image} alt='' />
        <div>
          <p className='text-lg my-2'>{title}</p>
        </div>
        <p className='text-2xl'>₹ {price}</p>
        <p>Free delivery by Us</p>
      </div>
    </Link>
  );
};

export default ProductCard;
