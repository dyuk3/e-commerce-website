import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ name }) => {
  return (
    <div>
      {/* link to different categories of products */}
      <Link to={`/${name}`} className='bg-gray-400 text-white p-4 md:p-4 rounded'>
        {name}
      </Link>
    </div>
  );
};

export default CategoryCard;
