import './App.css'
import { HashRouter, Routes, Route } from 'react-router';
import NAV_ITEMS from './navs';
import ErrorPage from './pages/Error';
import ErrorBoundary from './pages/ErrorBoundary';


function App() {

  return (<ErrorBoundary fallback={<ErrorPage />}>
  <HashRouter >
    <Routes>
      {NAV_ITEMS.map((item) => (
        <Route key={item.name} path={item.link} element={item.element()} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </HashRouter>
      </ErrorBoundary>
  )
}

export default App