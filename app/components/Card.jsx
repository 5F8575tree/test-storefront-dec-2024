import {Await, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';

const Card = ({products}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={products}>
        {({products}) => (
          <div className="recommended-products-grid">
            {products.nodes.map((product) => (
              <Link
                key={product.id}
                className="recommended-product"
                to={`/products/${product.handle}`}
              >
                <Image
                  data={product.images.nodes[0]}
                  aspectRatio="1/1"
                  sizes="(min-width: 45em) 20vw, 50vw"
                />
                <div className="recommended-product__lower">
                  <h5>NEW</h5>
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default Card;
