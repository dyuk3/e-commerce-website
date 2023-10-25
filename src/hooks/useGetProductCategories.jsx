import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategories } from '../features/productSlice';
import { PRODUCT_CATEGORIES_API } from '../utils/constants';

const useGetProductCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await fetch(PRODUCT_CATEGORIES_API);
    const categories = await data.json();
    dispatch(addCategories(categories));
  };
};

export default useGetProductCategories;
