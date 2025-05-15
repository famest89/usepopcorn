import { useRef } from 'react';
import { useKey } from '../../hooks/useKey';

const Search = ({ query, setQuery }) => {
  const inputElRef = useRef(null);

  useKey('Enter', () => {
    if (document.activeElement === inputElRef.current) return;

    inputElRef.current.focus();
    setQuery('');
  });

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      ref={inputElRef}
    />
  );
};

export default Search;
