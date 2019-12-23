import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1' target='_blank'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  //ptor  for object required
  user: PropTypes.object.isRequired
  // ptar  for array required
};

export default UserItem;
