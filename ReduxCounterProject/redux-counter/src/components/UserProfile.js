import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <form>
        <input type='text' />
        <br />
        <button type='submit' style={{ margin: '5px' }}>Search</button>
      </form>
    </main>
  );
};

export default UserProfile;
