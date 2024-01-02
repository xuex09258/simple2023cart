export default function Cart() {
       return (
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
                <br />
                <small className="text-muted">NT$ 220</small>
              </td>
              <td>
                <select name="" id="" className="form-select" ></select>
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
       );
}