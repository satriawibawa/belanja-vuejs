<template>
  <div>
    <div class="container mt-3">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-3">
            <div class="card bg-light mb-3">
              <div class="card-header bg-primary text-white text-uppercase">
                <i class="fa fa-list"></i> Kategori
              </div>
              <ul class="list-group category_block">
                <li class="list-group-item">
                  <a href="category.html">Kategori 1</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Kategori 2</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Kategori 3</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Kategori 4</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Kategori 5</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/600x400/55595c/fff"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="product.html" title="View Product">Product title</a>
                    </h4>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="row">
                      <div class="col">
                        <span class="badge badge-danger">Rp 50.000</span>
                      </div>
                      <div class="col">
                        <a href="#" class="btn btn-success btn-block">Beli</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/600x400/55595c/fff"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="product.html" title="View Product">Product title</a>
                    </h4>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="row">
                      <div class="col">
                        <span class="badge badge-danger">Rp 50.000</span>
                      </div>
                      <div class="col">
                        <a href="#" class="btn btn-success btn-block">Beli</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/600x400/55595c/fff"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="product.html" title="View Product">Product title</a>
                    </h4>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="row">
                      <div class="col">
                        <span class="badge badge-danger">Rp 50.000</span>
                      </div>
                      <div class="col">
                        <a href="#" class="btn btn-success btn-block">Beli</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bloc_left_price {
    color: #c01508;
    text-align: center;
    font-weight: bold;
    font-size: 150%;
}
.category_block li:hover {
    background-color: #007bff;
}
.category_block li:hover a {
    color: #ffffff;
}
.category_block li a {
    color: #343a40;
}
.add_to_cart_block .price {
    color: #c01508;
    text-align: center;
    font-weight: bold;
    font-size: 200%;
    margin-bottom: 0;
}
.add_to_cart_block .price_discounted {
    color: #343a40;
    text-align: center;
    text-decoration: line-through;
    font-size: 140%;
}
.product_rassurance {
    padding: 10px;
    margin-top: 15px;
    background: #ffffff;
    border: 1px solid #6c757d;
    color: #6c757d;
}
.product_rassurance .list-inline {
    margin-bottom: 0;
    text-transform: uppercase;
    text-align: center;
}
.product_rassurance .list-inline li:hover {
    color: #343a40;
}
.reviews_product .fa-star {
    color: gold;
}
.pagination {
    margin-top: 20px;
}
footer {
    background: #343a40;
    padding: 40px;
}
footer a {
    color: #f8f9fa!important
}

</style>