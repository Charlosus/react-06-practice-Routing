import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const color = searchParams.get('color');
  const maxPrice = searchParams.get('maxPrice');

  return (
    <div>
      <p>Name: {name}</p>
      <p>Color: {color}</p>
      <p>Maximum price: {maxPrice}</p>
    </div>
  );
};

// get() method always return string

// const [searchParams] = useSearchParams();

// const name = searchParams.get("name");
// console.log(name, typeof name);// "hoodie", string

// const maxPrice = searchParams.get("maxPrice");
// console.log(maxPrice, typeof maxPrice);// "500", string

// const inStock = searchParams.get("inStock");
// console.log(inStock, typeof inStock);// "true", string

// we need to remember to do conversion of a types

//==========================================================================

// if searchParams is big we can change it to object

// const [searchParams] = useSearchParams();
// const params = useMemo(
//     () => Object.fromEntries([...searchParams]),
//     [searchParams]
// );

// const { name, maxPrice, inStock } = params

//========================================================================

// to change searchParams

import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setSearchParams({ name: e.target.value })}
      />
    </div>
  );
};

// =======================================================================

// #TRACKING CHANGES#

// if search query change hook useSearchParams will return new value of
// params and component will change thanks to to this we can capture change
// and triger changes

const App = () => {
  const [user, setUser] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get('username');

  useEffect(() => {
    // here we do asynchronous action like HTTP request
    if (username === '') return;

    async function fetchUser() {
      const user = await FakeAPI.getUser(username);
      setUser(user);
    }

    fetchUser();
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ username: form.elements.username.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && <UserInfo user={user} />}
    </>
  );
};

// ======================================================================
// LOCALIZATION OBJECT

// every localization query is writen in object

{
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}

// forexample this url

// <https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500#agreement>

// {
//     'pathname': '/products',
//     'search': "?name=hoodie&color=orange&maxPrice=500",
//     "hash": "#agreement",
//     "state": null,
//     "key": "random-broweser-generated-id"
// }

// to use object that represent current url we need to use
// useLocation() and asigne it to const one of example of using it is
// send current ti analytics

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Analytics from 'path/to/analytics-service';

const App2 = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.send(location);
  }, [location]);

  return <div></div>;
};

// lets say that user is searching our products for hoodie if he clicked
// on product and would like to come back he would clicked on return button
// he would go back to list of all products but we would not like that
// se we would like to page to remember that user is searching for hoodie
// to do that we need to use a state parameter form object location

const ProductReturn = () => {
  return (
    <Link to="/products/h-1" state={{ from: '/dashboard?name=hoodie' }}>
      Navigate to product h-1
    </Link>
  );
};
// this is just to show how it work
// you dont have to calculate url structure

const Products = () => {
  const location = useLocation();

  return (
    <Link to="/product/h-1" state={{ from: loaction }}>
      Navigation to product h-1
    </Link>
  );
};

// src/pages/ProductDetails.jsx

const ProductDetails = () => {
  const location = useLocation();
  console.log(location.state);

  // /products -> products/h-1
  // { from: { pathname: "/products", search: "" } }

  // /products?name=hoodie -> products/h-1
  // { from: { pathname: "/products", search: "?name=hoodie" } }

  return <Link to={location.state.from}>Back to products</Link>;
};

//======================================================================================
// normally every copmonent load at loading a page but we dont need to to it
// thinking about slower internet an phones we can add  lazy and suspanse method help is on that
// its up developer to determine which elements are suppose to load first those are necessary
// for page functioning

import { lazy, Suspense } from 'react';

const MyComponent = lazy(() => import('path/to/MyComponent'));

const App4 = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        <Route path="/some-path" element={<MyComponent />} />
      </Routes>
    </Suspense>
  );
};
