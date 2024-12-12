import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import About from './Components/Contact/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/applied-jobs' element={<AppliedJobs></AppliedJobs>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
