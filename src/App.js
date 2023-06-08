import "./styles.css";

import Category from "./components/Category";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const foodCategories = [
    "Breakfast",
    "Chicken",
    "Beef",
    "Dessert",
    "Lamb",
    "Pasta",
    "Seafood",
    "Vegetarian",
    "Goat",
    "Starter",
    "Vegan",
    "Side"
  ];

  return (
    <div className="appWrapper">
      <Header />
      <Category {...foodCategories} />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
