Array.prototype.myReduce = function(){
    // console.log("this is my custom reduce function")
    const array = [...this]
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum

    
}
let arr = [1,2,3,4,5]
console.log(arr.myReduce())

Array.prototype.myFilter = function(condition){
    // console.log("this is my custom filter function")
    const array = [...this]
    const filtered = []
    for(let i = 0; i < array.length; i++){
        if(condition(array[i])){
            filtered.push(array[i])
        }
    }
    return filtered
}

let arr2 = [1,2,3,4,5,6,10]
console.log(arr2.myFilter((x) => x % 2 == 0))