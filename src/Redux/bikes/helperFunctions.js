export const addItem=(cart,item)=>{


    console.log("STA DOBIJE",cart)
    const exisitingItem=cart.filter(elem=>elem.id===item.id);
    console.log("IGZISTING",exisitingItem)

    if(exisitingItem.length>0){
        return cart.map(itemToFind=>itemToFind.id === item.id ? {...itemToFind, quantity:itemToFind.quantity +1 } : itemToFind)
    }
        return [...cart, {...item, quantity:1}]

}