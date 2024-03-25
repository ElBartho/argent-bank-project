import { useLocation } from 'react-router-dom';

const Transaction = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return <div>Transaction Page</div>;
};

export default Transaction;
