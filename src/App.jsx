import { Route, Routes } from "react-router-dom";

import WaiterView from './views/WaiterView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView'

function App() {

  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)

  return (
    <div className="Router">
      <Routes>
        <Route path='/' element={<LoginView />} />
        <Route path='/not-found' element={<NotFoundView />} />
        <Route path='/orders' element={<WaiterView />} />
      </Routes>
    </div>
  )
}

export default App
