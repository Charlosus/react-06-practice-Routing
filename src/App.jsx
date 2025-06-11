// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useParams } from 'react-router-dom';
import './App.css';

// React dont support Routing to that we need to add library

// 1) npm install react-router-dom

// to add its functionality we need to add to main.jsx
// 2) import { BrowserRouter } from 'react-router-dom';

// 3) and add tag BrowserRouter to ReactDOM
// <BrowserRouter>
//   <App />
// </BrowserRouter>

// 4) <Route> aloud to connect URL adress with described component
// if we want to display <About> compnent we need to add path="/about"

{
  /* <Router path="/about" element={<About/>} */
}

// ======================================================================

// import { Route, Router } from 'react-router-dom';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';

// export const AppShop = () => {
//   return (
//     <div>
//       {/* To use Route you need to put it inside Router component */}
//       <Router>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//       </Router>
//     </div>
//   );
// };

// =======================================================================

// If user would put in link or click at link that have / non-existing-route
// or any other non existing route it will resault in blank page to avoit that
// we can add <Route> at the end of the list that will act if non other path will work

// import { Route, Router } from 'react-router-dom';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';

// // import NotFound element that we want to display
// import NotFound from 'path/to/page/NotFound';

// export const AppShop = () => {
//   return (
//     <div>
//       {/* To use Route you need to put it inside Router component */}
//       <Router>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         {/* Here we ad route to Nonfound element */}
//         <Route path="*" element={<NotFound />} />
//       </Router>
//     </div>
//   );
// };

// ======================================================================

// all thtat above was about anvigating one one page to jump to components
// if we want to navigate on difirient pages of our aplication we dont use
// ta <a href=""> we need to use component <link to>

{
  /* <nav>
  <Link to='/'>Home</Link>
  <Link to='/about'>About</Link>
  <Link to='/products'>Products</Link>
</nav> */
}

// component <NavLink> is only difrient from nav is that it can hav aditionl
// styles if url match 'to' props to for example active  which is default classname
// asigne which can be use to style link

// import { Routes, Route, NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import NotFound from 'path/to/pages/NotFound';
// import css from './App.module.css';

// // we here can add a css class if element is active
// const buildlinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// export const AppLink = () => {
//   return (
//     <div>
//       <nav className={css.nav}>
//         <NavLink to="/" className={buildlinkClass}>
//           Home
//         </NavLink>
//         <NavLink to="/about" className={buildlinkClass}>
//           Home
//         </NavLink>
//         <NavLink to="/products" className={buildlinkClass}>
//           Home
//         </NavLink>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

//=======================================================================

// URL Parameters

// with using ':' in path we can customize URL for example
// if we had 5 difireint BlogPosts we dont need to create route to each of
// them we can add :postId and user can cavigate with url with names of post

<Route path="/blog/:postId" element={<BlogPost />} />;

import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return <h1>Loading post: {postId} </h1>;
}

import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Home from 'path/to/pages/Home';
import About from 'path/to/pages/About';
import Products from 'path/to/pages/Products';
import NotFound from 'path/to/pages/NotFound';
import css from './App.module.css';
import ProductDetails from 'path/to/pages/ProductDetails';

const buildlinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AppLink = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildlinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildlinkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={buildlinkClass}>
          Home
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />

        {/* Lets add route to products by its id  */}
        <Route path="/products/:productsId" element={<ProductDetails />} />

        {/*  */}
      </Routes>
    </div>
  );
};

function App() {}

export default App;
