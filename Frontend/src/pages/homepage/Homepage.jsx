import React, { useEffect, useState } from "react";
import { getAllProductsApi } from "../../apis/Api";
import { Link, useNavigate } from "react-router-dom";
import './Homepage.css'; // Create this CSS file for custom styles

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // get all products
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // instance of navigate hook
  const navigate = useNavigate();

  // navigate to search page when search button is clicked
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  // function to trim product description
  const trimDescription = (description) => {
    const maxLength = 60;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  // Handle payment success
  const handlePaymentSuccess = () => {
    // Perform actions on payment success, e.g., update state, display success message

    // Redirect to homepage
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <form action="" className="mb-5">
        <div className="input-group">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search products by name"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade mb-5"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.wixstatic.com/media/0edd11_7997ae34e35f40e69f962cf9957997c2~mv2.jpg/v1/fill/w_2500,h_2500,al_c/0edd11_7997ae34e35f40e69f962cf9957997c2~mv2.jpg"
              className="d-block w-100 carousel-img"
              alt="Beautifulday"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Indoor Plant Shop</h5>
              <p>Plant of your choice</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://www.roseclover.co.uk/cdn/shop/collections/2A2A0764.jpg?v=1629201425"
              className="d-block w-100 carousel-img"
              alt="Mental peace"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>See what's best for your health.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://westchestermagazine.com/wp-content/uploads/2023/10/adobe-stock-plant-store-1068x712.jpg"
              className="d-block w-100 carousel-img"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Best peace in the world.</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <h1 className="mt-5 mb-4 text-center">Available Products</h1>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {products.map((product) => (
            <Link to={`/product/details/${product._id}`} className="col" key={product._id}>
              <div className="card h-100 d-flex flex-column shadow-sm product-card">
                <img
                  src={product.image}
                  className="card-img-top object-cover"
                  alt={product.name}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="card-title text-black">{product.name}</h5>
                    <h5 className="card-title text-black">NPR.{product.price}</h5>
                  </div>
                  <p className="text-black flex-grow-1">
                    {trimDescription(product.description)}
                  </p>
                  <button className="btn btn-outline-primary mt-auto">
                    View more
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
