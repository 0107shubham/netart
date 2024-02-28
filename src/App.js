import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-app">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
