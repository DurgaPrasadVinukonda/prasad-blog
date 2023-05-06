import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Update from './components/Update';

function App() {
  // const title='Welcome to the new blog'
  // const likes=50;
  // const person={ name:'yoshi',age:30};
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route exact  path="/create" element={<Create/>}>          
          </Route>
          <Route  path="/blogs/:id"element={<BlogDetails/>}>
          </Route>
          
          <Route exact  path="/update/:id" element={<Update/>}>          
          </Route>
          <Route exact  path="*" element={<NotFound/>}>          
          </Route>
        
        </Routes>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
