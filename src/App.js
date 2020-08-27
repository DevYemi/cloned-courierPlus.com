import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header'
import MainContent from './components/mainContent'
import Footer from './components/footer'
import WhoWeAre from './components/WhoWeAre'


function App() {
  return (
    <Router>
    <div className='App'>
    <Header />
    <Switch>
     <Route path="/" component={MainContent} exact />
     <Route path="/AboutUs" component={WhoWeAre} />
     </Switch>
    <Footer />
    </div>

    </Router>
  );
}

export default App;
