import React, {useEffect, useState} from 'react';
import { List, Header } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <div className="App">
      <Header as='h2' icon='users' content='TrainingApp'/>
      <List>
        {activities.map((item: any) => (
            <List.Item key={item.id}>{item.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
