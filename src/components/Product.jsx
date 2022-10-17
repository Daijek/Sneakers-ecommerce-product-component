import React, { useState } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import product1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "../images/image-product-4-thumbnail.jpg";

const Product = () => {
  const [thumbnail, setThumbnail] = useState(product1);
  const [active, setActive] = useState(1);
  const [lightbox, setLightbox] = useState(false);
  const nextThumnail = () => {
    if (active + 1 <= productImages.length) {
      setActive(active + 1);
      setThumbnail(productImages[active].product);
    } else {
      setActive(1);
      setThumbnail(productImages[0].product);
    }
  };
  const prevThumnail = () => {
    if (active - 1 >= 1) {
      setActive(active - 1);
      setThumbnail(productImages[active - 2].product);
    } else {
      setActive(4);
      setThumbnail(productImages[3].product);
    }
  };
  const productImages = [
    { id: 1, product: product1, productThumbnail: product1Thumbnail },
    { id: 2, product: product2, productThumbnail: product2Thumbnail },
    { id: 3, product: product3, productThumbnail: product3Thumbnail },
    { id: 4, product: product4, productThumbnail: product4Thumbnail },
  ];
  return (
    <div>
      <div>
        <div className="product">
          <div className="product-left-side">
            <div
              onClick={() => {
                setLightbox(true);
              }}
              className="main-image"
            >
              <img src={thumbnail} alt="product" />
            </div>
            <div className="thumbnails">
              {productImages.map((products) => {
                return (
                  <div
                    className={
                      active === products.id && "active-thumbnail-border"
                    }
                  >
                    <img
                      className={active === products.id && "active-thumbnail"}
                      key={products.id}
                      src={products.productThumbnail}
                      alt="product thumbnail"
                      onClick={() => {
                        setThumbnail(products.product);
                        setActive(products.id);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-right-side">
            <p>SNEAKER COMPANY</p>
            <div className="description">
              <h1>Fall Limited Edition Sneakers</h1>
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
              <h1>
                125.00 <span>50%</span>
              </h1>
              <p>250.00</p>
            </div>
            <div className="buttons">
              <div>
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </div>
              <div className="add-to-cart-button">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {lightbox && (
        <div className="light-box">
          <div className="light-box-cover">
            <div className="lightbox-close">
              <div
                onClick={() => {
                  setLightbox(false);
                }}
              >
                x
              </div>
            </div>
            <div className="main-lightbox-image">
              <div
                onClick={() => {
                  prevThumnail();
                }}
                className="light-left"
              >
                &lt;
              </div>
              <img src={thumbnail} alt="light box" />
              <div
                onClick={() => {
                  nextThumnail();
                }}
                className="light-right"
              >
                &gt;
              </div>
            </div>

            <div className="lightbox-thumbnail-cover">
              {productImages.map((products) => {
                return (
                  <div
                    className={`${
                      active === products.id
                        ? "active-thumbnail-border"
                        : undefined
                    } lightbox-thumbnails`}
                  >
                    <img
                      className={
                        active === products.id ? "active-thumbnail" : undefined
                      }
                      onClick={() => {
                        setThumbnail(products.product);
                        setActive(products.id);
                      }}
                      src={products.product}
                      alt="product thumbnail"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
