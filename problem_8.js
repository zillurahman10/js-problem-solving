var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let max = numbers[0]
const findBiggestNumber = () => {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
}
findBiggestNumber()
console.log(max)