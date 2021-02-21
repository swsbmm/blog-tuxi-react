import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';

import Index from './paginas/Index/Index'
import Blogs from './paginas/Blogs/Blogs'
import Blog from './paginas/Blog/Blog'

const App = () => (
  <div>
  <BrowserRouter>
    <Switch>
      
      
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog" component={Blog} />
      <Route path="/" component={Index} />
      
    </Switch>
  </BrowserRouter>
  </div>
  
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

