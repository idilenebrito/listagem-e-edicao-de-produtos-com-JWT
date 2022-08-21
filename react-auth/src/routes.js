import { useContext } from 'react';
import Login from './pages/Login/Login';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LoginAuthContext } from './contexts/loginAuth';
import { Navigate } from 'react-router-dom';
import ListDeProdutos from './pages/Produtos/ListaDeProdutos';
import EdicaoDeProduto from './pages/Produtos/EditarProduto';

const MyRoutes = () => {
  function PrivateRoute({ children }) {
    const { authenticated } = useContext(LoginAuthContext);
    if (!authenticated && localStorage.getItem('userProfile') === null) {
      return <Navigate to={'/login'} />;
    }
    return children;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListDeProdutos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lista-produtos" element={<ListDeProdutos />} />
        <Route
          path="/edicao-produtos"
          element={
            <PrivateRoute>
              <EdicaoDeProduto />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
