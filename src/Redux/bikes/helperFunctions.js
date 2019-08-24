export const addItem=(cart,item)=>{
    console.log(item)
    const exisitingItem=cart.find(elem=>elem.id===item.id);

    if(exisitingItem){
        return cart.map(itemToFind=>itemToFind.id === item.id ? {...itemToFind, quantity:itemToFind.quantity +1 } : itemToFind)
    }
        return [...cart, {...item, quantity:1}]

}

export const removeItem=(cart,item)=>{


    const existingItem=cart.find(elem=>elem.id===item.id);

    if(existingItem.quantity===1){
        return cart.filter(itemToFind=>itemToFind.id !== item.id)
    }
    return cart.map(itemToFind=> 
        itemToFind.id === item.id ? 
        {...itemToFind, quantity:itemToFind.quantity - 1} : itemToFind )

}