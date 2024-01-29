import Container from 'components/Container';
import Profile from 'components/Profile';
import user from 'utils/user.json';

const App = () => {
  return (
    <div>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
    </div>
  );
};

export default App;
