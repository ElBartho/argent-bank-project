import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Transaction from './pages/Transaction';
import Error from './pages/Error';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile/:profileId' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/profile/:profileId/account/:accountId/transactions'
        element={<Transaction />}
      />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
