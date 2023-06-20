
// import './App.css';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {


  // const title = "Welcome to the new blog";
  // const likes = 50;



  return (
    <Router>

    <div className="App">
      <Navbar/>
      <div className="content">
          {/* <Home/> */}
          <Switch>

            <Route exact path="/"> 
              <Home/>

            </Route>
            <Route path="/create"> 
              <Create/>

            </Route>

            <Route path="/blogs/:id"> 
              
              <BlogDetails/>

            </Route>

            <Route path ="*">
              <NotFound/>
            </Route>
          </Switch>

        {/* <p>{ likes} times...</p> */}

      </div>
      </div>
      </Router>
  );
}

export default App;
