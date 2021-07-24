import List from './List';
import ListAddItemForm from './ListAddItemForm';
import ListProvider from './ListProvider';
import '../styles/App.css';

function App() {
  return (
    <div class="content">
      <ListProvider>
        <ListAddItemForm />

        <List>
        
        </List>
      </ListProvider>
    </div>
  );
}

export default App;
