import Container from 'components/Container';
import Profile from 'components/Profile';
import Section from 'components/Section';
import user from 'utils/user.json';
import stats from 'utils/data.json';
import Statistics from 'components/Statistics';

const App = () => {
  return (
    <div>
      <Section>
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <Statistics stats={stats} title="Upload stats" />
        </Container>
      </Section>
    </div>
  );
};

export default App;
