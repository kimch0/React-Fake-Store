export const addCar = (product, quantity) => {
  let list = [];
  let rep = false;
  let id = 0;
  if (window.sessionStorage.getItem("product") !== null) {
    list = JSON.parse(window.sessionStorage.getItem("product"));
  }

  let obj = {
    id: product.id,
    image: product.image,
    title: product.title,
    price: product.price,
    quantity: quantity,
  };

  if (list.length === 0) {
    console.log("aqui que paso");
    list.push(obj);
    window.sessionStorage.setItem("product", JSON.stringify(list));
  } else {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
        rep = true;
        id = i;
        break;
      }
    }
    if (rep) {
      list[id].quantity = list[id].quantity + obj.quantity;
      window.sessionStorage.setItem("product", JSON.stringify(list));
    } else {
      list.push(obj);
      window.sessionStorage.setItem("product", JSON.stringify(list));
    }
  }
};
