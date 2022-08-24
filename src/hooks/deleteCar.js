export const deleteCar = (id) => {
    let list = []
    list = JSON.parse(window.sessionStorage.getItem("product"));
    for(let i = 0 ; i < list.length ; i++){  
        if(list[i].id === id){
            list.splice(i,1)
        }
    }
    window.sessionStorage.setItem("product", JSON.stringify(list));
    window.location.reload(true);
}