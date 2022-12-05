// x=26;
// console.log(X);
// //var-moze

const myFunc=()=>{
    return `callback`
}

const func=(func1)=>{
    func1
    return `main func`
}
func(myFunc);


const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];
  
  const third = (cart) => {
    const shippingCost = 320;
    const numOfProducts = cart.length;
    const newArr = cart.map((product) => {
      return {
        name: product.name,
        totalPrice: product.price * product.amount,
      };
    });
    //   const prices = newArr.map((product) => product.totalPrice);
    //   const sum = prices.reduce(
    //     (prevValue, currValue) => prevValue + currValue,
    //     shippingCost
    //   );
    const sum = newArr.reduce(
      (prevValue, currValue) => prevValue + currValue.totalPrice,
      shippingCost
    );
    return `You got ${numOfProducts} in cart, shipping cost is ${shippingCost}, your total is ${sum}.`;
  };
  
  console.log(third(CART_DATA));
