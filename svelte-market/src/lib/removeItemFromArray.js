function removeItemFromArray(array, itemToRemove) {
    let removed = false;
    return array.filter(item => {
        if (!removed &&
            item.name === itemToRemove.name &&
            item.desc === itemToRemove.desc &&
            item.img === itemToRemove.img &&
            item.price === itemToRemove.price) {
            removed = true;
            return false;
        }
        return true;
    });
}

export default removeItemFromArray;
