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
