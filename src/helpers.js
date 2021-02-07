function choice(items) {


    return items[Math.floor(Math.random()*items.length)];

}

    


function remove(item,items) {
    for (let i= 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0,1), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove};

