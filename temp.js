console.log("hello world")

const mycar = {
    make: "nissan",
    model: "Skyline",
    year: "2012",
    k1:"1",
    k2:"2",
    k3:"3",
}
for(let N=1; N<=3; N++){
    let key = `k${N}`
    console.log(mycar[key])
    console.log(key)
}

