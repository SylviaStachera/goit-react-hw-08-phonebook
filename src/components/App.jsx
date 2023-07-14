import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layot';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
