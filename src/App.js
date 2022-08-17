import { Header, Section } from './components/UI';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Data from './components/Data/Data';

function App() {
  return (
    <main>
      <Header>
        <Banner />
      </Header>

      <Section>
        <Cards />
      </Section>

      <Section>
        <Data />
      </Section>
    </main>
  );
}

export default App;
