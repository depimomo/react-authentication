import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../config/firebase';

// protected route ini untuk menjaga agar user hanya bisa mengakses halaman ketika sudah login
// kita juga bikin fungsi kebalikannya, jadi halaman login dan register tidak bisa diakses lagi
// setelah login
const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user] = useAuthState(auth);

  if (!user && loginOnly) {
    return <Navigate to="/login"/>;
  }

  if(user && !loginOnly) {
    return <Navigate to="/"/>;
  }
  
  return children;
};

export default ProtectedRoute;
