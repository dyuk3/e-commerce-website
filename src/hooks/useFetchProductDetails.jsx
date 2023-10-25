import { useEffect } from 'react';
import { PRODUCT_INFO } from '../utils/constants';
import { useParams } from 'react-router-dom';

const useFetchProductDetails = ({ setProductInfo }) => {
  const { productId } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, []);
  const fetchProductDetails = async () => {
    const data = await fetch(PRODUCT_INFO + productId);
    const productData = await data.json();
    setProductInfo(productData);
  };
};

export default useFetchProductDetails;
