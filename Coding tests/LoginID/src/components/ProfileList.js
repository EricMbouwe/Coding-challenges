import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileList({ profiles }) {
  return (
    <div>
      {profiles.map((profile) => (
        <Profile key={profile.id} data={profile} />
      ))}
    </div>
  );
}

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileList;
