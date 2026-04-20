import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import '../CSS/Navbar.css';
import logo from '../Images/BigBasket.png';
import CartIcon from '../Images/Cart.png';
import Login from '../Pages/Login_signUp/Login';
import SignUp from '../Pages/Login_signUp/SignUp';
import { useSelector } from 'react-redux';
import { getData } from '../Api/FetchData';

const categoriesData = {
  Electronics: {
    'Audio devices': [
      'Earbuds',
      'Headphones',
      'Neckbands',
      'Speakers & Soundbars',
      'Wired Earphones',
    ],
    'Cameras & Accessories': [],
    'Home Appliances': [],
  },
  Fashion: {
    'Fashion Essentials': [
      'Belts',
      'Eyewear',
      'Handbags & Wallets',
      'Jewellery',
    ],
    Footwear: [],
  },
  'Food Court': {
    'Biryani & Rice Delights': ['Biryani', 'Rice'],
    'Pizza & Pasta': [],
  },
  'Pharma-L1': {
    'Pharma-L2': ['Pharma-L3'],
  },
  'Pharmancy & Wellness': {
    'OTC Medicine & Device': [
      'Adult Nutriyion',
      'Assorted Devices',
      'Ayurveda Dermatology Meds',
      'Baby Food Variety',
      'Bath & Body Care',
      'Child Care',
    ],
    'OTX Medicine': [],
    'RX Medicine': [],
  },
  'fruits & Vegetables': {
    'Cuts & Sprouts': [
      'Cut & Peeled Veggies',
      'Cut Fruit, Tender Coconut',
      'Fresh Juices & Milkshakes',
      'Fresh Salads & Sprouts',
      'Recipe Packs',
    ],
    'Fresh Fruits': [],
    'Herbs & Seasonings': [],
    'Organic Fruits & Vegetables': [],
  },
  'Foodgrains, Oil & Masala': {
    'Biryani & Rice Delights': ['Biryani', 'Rice'],
    'Pizza & Pasta': [],
  },
  'Bakery, Cakes & Dairy': {
    'Biryani & Rice Delights': ['Biryani', 'Rice'],
    'Pizza & Pasta': [],
  },
  Beverages: {
    'Biryani & Rice Delights': ['Biryani', 'Rice'],
    'Pizza & Pasta': [],
  },
  'Snacks & Branded Foods': {
    'Biryani & Rice Delights': ['Biryani', 'Rice'],
    'Pizza & Pasta': [],
  },
};

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const cartItems = useSelector((store) => store.cart.cart);

  const [search, setSearch] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${search}`);
      setShowDropdown(false);
    }
  };

  React.useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await getData(`/products`);

        const filtered = res.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        );

        setSuggestions(filtered.slice(0, 5));
        setShowDropdown(true);
      } catch (err) {
        console.log(err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.searchBox')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  const [activeCategory, setActiveCategory] = useState('Electronics');
  const [activeSub, setActiveSub] = useState('Audio devices');

  const categories = Object.keys(categoriesData);
  const subCategories = Object.keys(categoriesData[activeCategory] || {});
  const items = categoriesData[activeCategory]?.[activeSub] || [];

  return (
    <div className="navbar">
      {/* TOPBAR */}
      <div className="topbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="bigbasket" />
          </NavLink>
        </div>

        <div className="searchBox">
          <input
            type="text"
            placeholder="Search for Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            onFocus={() => search && setShowDropdown(true)}
          />

          {showDropdown && suggestions.length > 0 && (
            <div className="searchDropdown">
              {suggestions.map((item) => (
                <div
                  key={item._id}
                  className="suggestionItem"
                  onClick={() => {
                    navigate(`/product/${item._id}`);
                    setSearch('');
                    setShowDropdown(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="delivery">
          ⚡ Delivery in 10 mins <br />
          <span>Select Location</span>
        </div>

        <button className="loginBtn" onClick={() => setOpenLogin(true)}>
          Login
        </button>

        <Login
          open={openLogin}
          onClose={() => setOpenLogin(false)}
          openSignup={() => {
            setOpenLogin(false);
            setOpenSignup(true);
          }}
        />

        <SignUp
          open={openSignup}
          onClose={() => setOpenSignup(false)}
          openLogin={() => {
            setOpenSignup(false);
            setOpenLogin(true);
          }}
        />

        <NavLink to="/Cart">
          <div className="cart">
            <img src={CartIcon} alt="cart" />
            {cartItems.length > 0 && (
              <span className="cartCount">{cartItems.length}</span>
            )}
          </div>
        </NavLink>
      </div>

      <div className="menu">
        <button className="categoryBtn">Shop by Category</button>

        <Login
          open={openLogin}
          onClose={() => setOpenLogin(false)}
          openSignup={() => {
            setOpenLogin(false);
            setOpenSignup(true);
          }}
        />

        <SignUp
          open={openSignup}
          onClose={() => setOpenSignup(false)}
          openLogin={() => {
            setOpenSignup(false);
            setOpenLogin(true);
          }}
        />

        <NavLink to="/Cart">
          <div className="cart">
            <img src={CartIcon} alt="cart" />
          </div>
        </NavLink>
      </div>

      {/* MENU */}
      <div className="menu">
        {/* CATEGORY BUTTON */}
        <div
          className="categoryWrapper"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          <button className="categoryBtn">Shop by Category ⬇</button>

          {/* DROPDOWN */}
          {openMenu && (
            <div className="megaMenu">
              {/* LEFT */}
              <div className="left">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className={activeCategory === cat ? 'active' : ''}
                    onMouseEnter={() => {
                      setActiveCategory(cat);
                      const firstSub = Object.keys(categoriesData[cat])[0];
                      setActiveSub(firstSub);
                    }}
                  >
                    {cat}
                  </div>
                ))}
              </div>

              {/* MIDDLE */}
              <div className="middle">
                {subCategories.map((sub) => (
                  <div
                    key={sub}
                    className={activeSub === sub ? 'active' : ''}
                    onMouseEnter={() => setActiveSub(sub)}
                  >
                    {sub}
                  </div>
                ))}
              </div>

              {/* RIGHT */}
              <div className="right">
                {items.length > 0 ? (
                  items.map((item, i) => <div key={i}>{item}</div>)
                ) : (
                  <div className="noData">No Items</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* OTHER MENU ITEMS */}
        <div className="menuItems">
          <NavLink to="/Exotic_Fruits_Veg">Exotic Fruits & Veg...</NavLink>
          <NavLink to="/Tea">Tea</NavLink>
          <NavLink to="/Ghee">Ghee</NavLink>
          <NavLink to="/Milk">Milk</NavLink>
          <NavLink to="/Fresh_Vegetables">Fresh Vegetables</NavLink>
        </div>

        <div className="smartBasket">Smart Basket</div>
      </div>
    </div>
  );
};

export default Navbar;
