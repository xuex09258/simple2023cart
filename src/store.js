import { createContext } from "react";

//55
function calcuactorTotal(cartList) {
    const array = cartList.map((item) => {
      return item.quantity * item.price;
    });
    //console.log(array);
    const total = array.reduce((a, b) => {
      return a + b;
    }, 0);
    return total;
  }

  export const cartInit = {
    cartList: [],

   }

export const cartReducer = (state, action) => {
    const cartList = [...state.cartList];

    // 1 先取得当前购物车目标品项的索引
   const index = cartList.findIndex((item) => item.id === action.payload.id);
   //console.log(index);
   //console.log(action);

   switch (action.type) {
      case 'ADD_TO_CART':
        if ( index === -1) {
          // 还未加入到购物车内
             cartList.push(action.payload);
        } else {
          // 当前购物车内的项目 与 加入的项目一致
          cartList[index].quantity += action.payload.quantity;
        }
        //55
        //const total = calcuactorTotal(cartList);

        
        return {
          ...state,
          cartList,
          total: calcuactorTotal(cartList),  
        }

        case 'CHANGE_CART_QUANTITY':
          cartList[index].quantity = action.payload.quantity;
          return {
            ...state,
            cartList,
            total: calcuactorTotal(cartList),
          };

          case  'REMOVE_CART_ITEM':
          cartList.splice(index, 1);
          return {
            ...state,
            cartList,
            total: calcuactorTotal(cartList),
          };

      default:
        return state
    }
   }

export const CartContext = createContext({})