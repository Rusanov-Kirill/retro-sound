import { HashRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes.tsx';

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
