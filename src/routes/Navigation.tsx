import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

export const Navigation = () => (
  <BrowserRouter>
    <div className="main-layout">
      <nav className="nav">
        <img alt="React Logo" src="/react.svg" width={200} />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="users">Users</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route element={<h1>Home</h1>} path="/" />
        <Route element={<h1>About</h1>} path="about" />
        <Route element={<h1>Users</h1>} path="users" />

        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </div>
  </BrowserRouter>
);
