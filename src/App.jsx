import Navbar from "./components/Navbar";
import Homepages from "./pages/Homepages";
import Footer from "./components/Footer";


function App () {
  return (
    <div>

      {/* Navbar */}
      <Navbar/>

      {/*  Content */}
      <Homepages/> 

      {/* Footer */}
      <Footer/> 

    </div>
  );
}

export default App