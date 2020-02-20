function swap(whatToSwap, swapWith){
    let temp = whatToSwap;
    whatToSwap = swapWith;
    swapWith = temp;
    
    return [swapWith]
}

const selectionSort = (array) => {

    let sortedArray =[]
    let swapped;
    for(let i =0; i < array.length;i++){
        for (let j = 0; j < array.length;j++){
            let checkSmall = array[j];
            if (checkSmall < array[i]){
                swapped = swap(checkSmall, array[i])
                if (swapped < ) {
                    sortedArray.push(swapped)

                }
               
            }
        }
    }
    console.log(sortedArray);
    

    
}

let arr = [9,6,8,7,3,4,2,5,1];

selectionSort(arr)