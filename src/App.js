

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span clasNames="navbar-brand">大強甜品店</span> 
      <button className="btn btn-outline-dark position-relative" type="submit">
        購物車
        <span className="badge rounded-pill bg-danger
                         position-absolute top-0 start-100 translate-middle">99</span>
        </button>
   
  </div>
      </nav>
      
      <div className="container mt-4">
        {/* 外層格線 */}
        <div className="row">
          {/* 左邊11======================================================================= */}
          <div className="col-md-7">
               {/* 內層格線 */}
               <div className="row row-cols-3 g-3">
                    <div className="col">
                         <div className="card">
                           <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                  className="card-img-top" alt="..." />
                          <div className="card-body">
                           <h6 className="card-title">全疏食健康餐
                             <span className="float-end">NT$ 220</span>
                           </h6>
                           <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                          </div>
                    </div>

                    </div>
                    <div className="col">
                         <div className="card">
                           <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1NDY5NTJ8MHwxfHNlYXJjaHwxfHxTd2VldCUyMGNha2V8ZW58MHx8fHwxNzA0MDA0ODkwfDA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400"
                                  className="card-img-top" alt="..." />
                          <div className="card-body">
                           <h6 className="card-title">全疏食健康餐
                             <span className="float-end">NT$ 220</span>
                           </h6>
                           <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                          </div>
                    </div>

                    </div>
                    <div className="col">
                         <div className="card">
                           <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                  className="card-img-top" alt="..." />
                          <div className="card-body">
                           <h5 className="card-title">全疏食健康餐
                             <span className="float-end">NT$ 220</span>
                           </h5>
                           <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                          </div>
                    </div>

                    </div>
                    <div className="col">
                         <div className="card">
                           <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                  className="card-img-top" alt="..." />
                          <div className="card-body">
                           <h5 className="card-title">全疏食健康餐
                             <span className="float-end">NT$ 220</span>
                           </h5>
                           <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                          </div>
                    </div>

                    </div>
                    <div className="col">
                         <div className="card">
                           <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                  className="card-img-top" alt="..." />
                          <div className="card-body">
                           <h5 className="card-title">全疏食健康餐
                             <span className="float-end">NT$ 220</span>
                           </h5>
                           <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                          </div>
                         </div>

                    </div>

               </div>
          </div>

          {/* 右邊22======================================================================= */}
          <div className="col-md-5">
               {/* 內層格線 */} 
                <div className="bg-light p-3">
                     <table className="table align-middle">
                         <tbody>
                            <tr>
                               <td>
                                <a href="#">x</a>
                               </td>
                               <td>
                                <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                     className="table-image"
                                     alt="" />
                               </td>
                               <td>
                                    全疏食健康餐
                                    <br/>
                                    <small className="text-muted">NT$ 220</small>
                               </td>
                               <td>
                                <selsct name="" id="" className="form-select" ></selsct>
                               </td>
                               <td className="text-end">
                                NT$ 440
                               </td>
                            </tr>
                         </tbody>
                         <tfoot>
                            <tr>
                                <td colSpan={5} className="text-end">
                                  總金額 NT$ 440
                                </td>
                            </tr>
                         </tfoot>

                     </table>

                </div>

               
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
