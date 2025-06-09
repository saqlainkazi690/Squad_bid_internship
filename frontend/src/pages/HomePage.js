import React from 'react';
import ProductCard from '../components/ProductCard';
import carrot from '../assets/carrot.jpeg';
import tomato from '../assets/tomato.jpeg';
import cucumber from '../assets/cucumber.jpeg';
import { createGroup } from '../api';

const products = [
  { name: "Carrot", quantity: "500g", price: 25, productId: "carrot", image: carrot },
  { name: "Tomato", quantity: "1kg", price: 30, productId: "tomato", image: tomato },
  { name: "Cucumber", quantity: "250g", price: 15, productId: "cucumber", image: cucumber },
];

const HomePage = () => {
  // Pass group creation logic to ProductCard and return data
  const handleGroupBuy = async (product) => {
    const res = await createGroup({
      productId: product.productId,
      requiredCount: 3,
      durationMinutes: 10,
    });

    return {
      referralCode: res.data.referralCode,
      userId: "You" // can be generated from localStorage in the future
    };
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 20 }}>Dairy, Bread & Eggs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((p, idx) => (
          <ProductCard key={idx} product={p} onGroupBuy={handleGroupBuy} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
