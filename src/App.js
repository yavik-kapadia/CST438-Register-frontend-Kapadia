import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import Admin from './components/Admin';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Admin />
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route path='/Admin' component={Admin} />
       </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;