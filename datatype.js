// 1.string

// let insti = 'pyspider'
// console.log("institude name ==>",insti)

// let branch = "basavangudi" 
// console.log("institude branch ==>",branch)

// let location = `bengaluru`
// console.log("institude location ==>",location)

// console.log(`name of institude ${insti}`)

//2.number
// console.log("type of insti",typeof insti)

// num=30
// console.log(num)

// num=45.5
// console.log(num1)

// let num = 1234567890123456
// console.log("number is:",num)

//3.bigint
// let BigInt = BigInt("12345678901234567890")
// console.log("big number:",BigInt)

// let bigInt2=  12345678901234567890n
// console.log("big number2:",bigInt2)

//4.undefind
// let salary
// console.log("salary is : ",salary)
// console.log("type of salary:",typeof salary)

// salary = 20000
// console.log("type of salary:",typeof salary)

// salary = "phonepay"
// console.log("type of salary:",typeof salary)

//5.boolean
let a=100
let b=102
console.log("a==:",a==b)
console.log("a != :",a!=b)
console.log("type of a==b:",typeof (a==b))

//6.null
let age=null
console.log("age",age)
console.log("type of null:",typeof (null))

//7.object
let pysp = {
    head : 'irshan sir',
    trainers : 6,
    staff : 10,
    isofftoday : false,
    holiday:undefined,
    fees : 35000.10
}
p=pysp
console.log("pysp",p, "type:",typeof(p))
console.log("\nIsoffToday:",p.IsoffToday)
console.log("fess:",p.fees)
console.log("head of pyspider:",p.head)
console.log("trainers:",p.trainers)
p['holiday']="kelbedi"
console.log(p)
p['location']="basavanagudi"
console.log(p)
console.log("update pysp:",p)
delete(p.holiday)
console.log(p)







