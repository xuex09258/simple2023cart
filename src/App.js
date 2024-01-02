import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <div className="container mt-4">
        {/* 外層格線 */}
        <div className="row">
          {/* 左邊11======================================================================= */}
          <div className="col-md-7">
            {/* 內層格線 */}
            <Products></Products>
          </div>

          {/* 右邊22======================================================================= */}
          <div className="col-md-5">
            {/* 內層格線 */}
            <Cart></Cart>



          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
