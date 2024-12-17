import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <hr style={{ width: "50%" }} />
      <main>
        <Signup />
      </main>
    </>
  );
}

export default App;
