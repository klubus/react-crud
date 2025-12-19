import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/pages/NoMatch/NoMatch.js';
import Home from './components/pages/Home/Home.js';
import About from './components/pages/About/About.js';
import SinglePost from './components/pages/SinglePost/SinglePost.js';
import AddPost from './components/pages/AddPost/AddPost.js';
import EditPost from './components/pages/EditPost/EditPost.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
