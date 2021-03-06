import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Skills from './components/shared/Skills'
import Portfolio from './components/shared/Portfolio'
import Work from './components/shared/Work'
import NoMatch from './components/shared/NoMatch';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/shared/Navbar';
import ContactShow from './components/contacts/ContactShow';
import Blogs from './components/blogs/Blogs';
import BlogShow from './components/blogs/BlogShow';
import PostShow from './components/posts/PostShow';


const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/about' element={<About />} />      
      <Route exact path='/skills' element={<Skills />} />      
      <Route exact path='/portfolio' element={<Portfolio />} />      
      <Route exact path='/work' element={<Work />} />
      <Route exact path='/contacts' element={<Contacts />} />      
      <Route exact path='/blogs' element={<Blogs />} />
      <Route exact path='/contacts/:contactId' element={<ContactShow />} />      
      <Route exact path='/blogs/:blogId' element={<BlogShow />} />
      <Route exact path='/blogs/:blogId/posts/:postId' element={<PostShow />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;