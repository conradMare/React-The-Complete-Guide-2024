import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
