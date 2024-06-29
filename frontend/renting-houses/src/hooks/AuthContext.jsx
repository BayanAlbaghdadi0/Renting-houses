import React, { createContext, useState, useContext, useEffect } from 'react';
// src/contexts/AuthContext.jsx
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage if available
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    // Perform login logic (e.g., API call)
    const loggedInUser = { username }; // Example user data
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  };

  const signup = (username, password) => {
    // Perform signup logic (e.g., API call)
    const newUser = { username }; // Example user data
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



// // src/hooks/useAuth.js
// import { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default useAuth;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// export const Signup = () => {
//   const { signup } = useAuth();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signup(username, password);
//   };

//   return (
//     <div className="flex justify-center h-screen align-middle place-items-center">
//       <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-2">
//         <h1 className="text-2xl font-extrabold [text-shadow:1px_1px_5px_#3333ff]">Signup</h1>
//         <label className="input input-bordered flex items-center gap-2">
//           <input
//             type="text"
//             className="w-full shadow-lg shadow-slate-800"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label className="input input-bordered flex items-center gap-2">
//           <input
//             type="password"
//             className="w-full shadow-lg shadow-slate-800"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit" className="w-full btn btn-outline mt-3">Signup</button>
//         <p>if you have an account you can <Link to="/login">Login</Link> 🌌</p>
//       </form>
//     </div>
//   );
// };

// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// export const Login = () => {
//   const { login } = useAuth();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(username, password);
//   };

//   return (
//     <div className="flex justify-center h-screen align-middle place-items-center">
//       <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-2">
//         <h1 className="text-2xl font-extrabold [text-shadow:1px_1px_5px_#3333ff]">Login</h1>
//         <label className="input input-bordered flex items-center gap-2">
//           <input
//             type="text"
//             className="w-full shadow-lg shadow-slate-800"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label className="input input-bordered flex items-center gap-2">
//           <input
//             type="password"
//             className="w-full shadow-lg shadow-slate-800"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit" className="w-full btn btn-outline mt-3">Login</button>
//         <p>Don't have an account? <Link to="/signup">Signup</Link> 🌌</p>
//       </form>
//     </div>
//   );
// };
// استخدام المزود في التطبيق
// أخيرًا، تأكد من أنك تستخدم AuthProvider في أعلى شجرة المكونات الخاصة بك.

// jsx
// Copy code
// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
// import { Signup } from './pages/Signup';
// import { Login } from './pages/Login';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Switch>
//           <Route path="/signup" component={Signup} />
//           <Route path="/login" component={Login} />
//           {/* Add other routes here */}
//         </Switch>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;