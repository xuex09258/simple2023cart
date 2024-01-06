import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext, cartReducer, cartInit } from "./store";


function App() {
                     //11 先定義cartList  useReducer(() => {},{cartList: [],})
   const reducer = useReducer(cartReducer, cartInit)

  return (
    <CartContext.Provider value={reducer}>

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
    </CartContext.Provider>
  );
}


export default App;

