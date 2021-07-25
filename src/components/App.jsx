import List from './List';
import ListAddItemForm from './ListAddItemForm';
import ListProvider from './ListProvider';
import Helmet from 'react-helmet';
import '../styles/App.css';

function App() {
  return (
    <div class="content">
      <Helmet>
        <title>Lista ToDo</title>

        <meta name="author" content="Arthur Dev" />
        <meta name="description" content="Aplicativo que faz uma lista de tarefas" />
        <meta name="keywords" content="ToDo, lista, tarefas, tasks, listagem" />
      </Helmet>

      <ListProvider>
        <ListAddItemForm />

        <List>
        
        </List>
      </ListProvider>
    </div>
  );
}

export default App;
