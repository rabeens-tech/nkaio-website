import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import NAV_ITEMS from './navs';
import ErrorPage from './pages/Error';
import ErrorBoundary from './pages/ErrorBoundary';


function App() {

  return (<ErrorBoundary fallback={<ErrorPage />}>
  <BrowserRouter>
    <Routes>
      {NAV_ITEMS.map((item) => (
        <Route key={item.name} path={item.link} element={item.element()} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
      </ErrorBoundary>
  )
}

export default App