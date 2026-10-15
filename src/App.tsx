import { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/navbar';
import { useLocation } from 'react-router';
import './App.css';

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return <>
    <Navbar />
    <main className="pt-18">
      <Outlet />
    </main>
  </>;
}

export default App
