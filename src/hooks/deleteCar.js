export const deleteCar = (id) => {
    let list = []
    list = JSON.parse(window.sessionStorage.getItem("product"));
    console.log('Entra')
    console.log(id)
    console.log('-------------------------------------')
    for(let i = 0 ; i < list.length ; i++){  
        if(list[i].id === id){
            list.splice(i,1)
        }
    }
    window.sessionStorage.setItem("product", JSON.stringify(list));
    window.location.reload();
}