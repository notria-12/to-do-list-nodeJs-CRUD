import TaskContextProvider from './context/TaskContext'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <main className="main">
            <TaskForm />
            <TaskList />
          </main>
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
