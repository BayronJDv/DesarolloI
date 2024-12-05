import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]); // Almacenar productos
  const [category, setCategory] = useState(''); // Categoría seleccionada
  const [keyword, setKeyword] = useState(''); // Palabra clave
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [totalPages, setTotalPages] = useState(1); // Total de páginas

  // Función para cargar productos desde el backend
  const fetchProducts = async (page = 1) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/products/', {
        params: {
          category,
          keyword,
          page,
        },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.total_pages); // Asegúrate de que el backend devuelva `total_pages`
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Cargar productos al montar el componente o cuando cambien los filtros
  useEffect(() => {
    fetchProducts();
  }, [category, keyword]);

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  return (
    <>
      <div className="shop_sidebar_area">
        <div className="widget catagory mb-50">
          <h6 className="widget-title mb-30">Categories</h6>
          <div className="catagories-menu">
            <ul>
              <li onClick={() => setCategory('chairs')}>Chairs</li>
              <li onClick={() => setCategory('beds')}>Beds</li>
              <li onClick={() => setCategory('accessories')}>Accessories</li>
              <li onClick={() => setCategory('furniture')}>Furniture</li>
              <li onClick={() => setCategory('home deco')}>Home Deco</li>
            </ul>
          </div>
        </div>
        <div className="widget search mb-50">
          <h6 className="widget-title mb-30">Search</h6>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="amado_product_area section-padding-100">
        <div className="container-fluid">
          <div className="row">
            {products.map((product) => (
              <div className="col-12 col-sm-6 col-md-12 col-xl-6" key={product.id}>
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src={product.imageurl} alt={product.name} />
                  </div>
                  <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                      <div className="line"></div>
                      <p className="product-price">${product.price}</p>
                      <h6>{product.name}</h6>
                    </div>
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <div className="cart">
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <nav aria-label="navigation">
                <ul className="pagination justify-content-end mt-50">
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                      <button className="page-link" onClick={() => fetchProducts(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
