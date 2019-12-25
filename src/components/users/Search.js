import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'; // impt
import GithubContext from '../../context/github/githubContext';

// rafce -- React Arrow Function Component with export default at the End
const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const { users, clearUsers, loading } = githubContext;

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  // ptfr

  setAlert: PropTypes.func.isRequired
};

export default Search;
