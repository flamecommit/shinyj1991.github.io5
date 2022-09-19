import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/Default'

import About from './pages/about';
import Home from './pages/home';
import PostDetail from './pages/post/detail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:title" element={<PostDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
