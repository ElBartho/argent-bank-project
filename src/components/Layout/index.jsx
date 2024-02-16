import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../Footer';
import { Root } from './layout';

const Layout = ({ children }) => {
  return (
    <Router>
      <Root>
        <Header />
        {children}
        <Footer />
      </Root>
    </Router>
  );
};

export default Layout;
