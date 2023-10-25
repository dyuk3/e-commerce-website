import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from '../features/productSlice';
import { CATEGORY_BASED_PRODUCTS_API } from '../utils/constants';

const useGetProducts = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  useEffect(() => {
    getProducts();
  }, [category]);

  const getProducts = async () => {
    const data = await fetch(CATEGORY_BASED_PRODUCTS_API + category);
    const productData = await data.json();

    dispatch(addProduct(productData));

    // console.log(productData);
  };
};

export default useGetProducts;
