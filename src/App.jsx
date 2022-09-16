import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Default'
import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
