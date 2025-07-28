import { HashRouter, HashRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import RouterConfig from './router/Router';
import './common.scss';
import './layout.scss';

function App() {
  return (
    <HashRouter>
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content">
          <RouterConfig />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;