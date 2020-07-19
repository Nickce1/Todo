import React from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navigation from '../Navigation/Navigation'
import { AddTaskModal } from '../AddTaskModal'
import { TasksList } from '../TasksList'
import { SearchList } from '../SearchList'
import { Layout } from '../Layout'

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={TasksList} />
              <Route path='/search' component={SearchList} />
            </Switch>
          </Router>
        </Layout>
      */}
      <Layout >
        <TasksList />
        <SearchList />
      </Layout>

      <AddTaskModal />
    </div>
  );
}

export default App;
