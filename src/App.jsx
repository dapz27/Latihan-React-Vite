import Navbar from "./components/navbar";
import Homepages from "./pages/Homepages";
import Footer from "./components/footer";

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