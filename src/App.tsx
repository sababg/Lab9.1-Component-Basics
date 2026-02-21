import { useState } from "react";
import "./App.css";
import userAvatar from "./assets/user.png";
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import type { AlertType } from "./types";

const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: userAvatar,
};

const product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl: "https://picsum.photos/200/200?v=2",
  inStock: true,
};

function App() {
  const [showAlert, setShowAlert] = useState<
    { name: AlertType; show: boolean; description: string }[]
  >([
    {
      name: "success",
      show: true,
      description: "Your profile has been updated successfully!",
    },
    { name: "warning", show: true, description: "This is a warning alert!" },
    { name: "error", show: true, description: "This is an error alert!" },
  ]);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert((prev) =>
      prev.map((a) =>
        a.name === "success"
          ? { ...a, show: true, description: "Product added to cart!" }
          : a,
      ),
    );
  };

  return (
    <div className="px-7 py-8">
      {showAlert.map((item) =>
        item.show ? (
          <AlertBox
            type={item.name}
            message={item.description}
            onClose={() =>
              setShowAlert((prev) =>
                prev.map((a) =>
                  a.name === item.name ? { ...a, show: false } : a,
                ),
              )
            }
          >
            <p className="text-sm">
              You can now continue using the application.
            </p>
          </AlertBox>
        ) : null,
      )}

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => handleAddToCart(productId)}
      >
        <div className="text-sm text-gray-500">Free shipping available</div>
      </ProductDisplay>
    </div>
  );
}

export default App;
