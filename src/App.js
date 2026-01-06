import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/pages/NoMatch/NoMatch.js';
import Home from './components/pages/Home/Home.js';
import About from './components/pages/About/About.js';
import SinglePost from './components/pages/SinglePost/SinglePost.js';
import AddPost from './components/pages/AddPost/AddPost.js';
import EditPost from './components/pages/EditPost/EditPost.js';
import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
import { Container } from 'react-bootstrap';
import Categories from './components/pages/Categories/Categories.js';
import CategoryPost from './components/pages/CategoryPost/CategoryPost.js';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<CategoryPost />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
