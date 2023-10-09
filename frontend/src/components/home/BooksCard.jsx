/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { PiBookOpenTextLight } from 'react-icons/pi';
// eslint-disable-next-line no-unused-vars
import { BiUserCircle } from 'react-icons/bi';
// eslint-disable-next-line no-unused-vars
import { AiOutlineEdit } from 'react-icons/ai';
// eslint-disable-next-line no-unused-vars
import { BsInfoCircle } from 'react-icons/bs';
// eslint-disable-next-line no-unused-vars
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ Book }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {Book.map((item) => (
        <BookSingleCard key={item._id} Book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
