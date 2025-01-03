// import Header from './components/Header.jsx';
// import Login from './components/Login.jsx';

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <Login />
//       </main>
//     </>
//   );
// }

// export default App;

// import Header from './components/Header.jsx';
// import Signup from './components/Signup.jsx';
// import Footer from './components/Footer.jsx';

// function App() {
//   return (
//     <>
//       <Header />
//       <div className='footer'>
//         <Footer />
//       </div>
//       <main>
//         <Signup />
//       </main>
//     </>
//   );
// }

// export default App;

import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default App;

