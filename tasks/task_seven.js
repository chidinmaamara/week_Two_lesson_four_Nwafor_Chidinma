function employment(){
    let job = "web developer"
}
employment()
console.log(job); // error: job is not defined


let goodJob = "video editor"
function employment(){
    console.log(goodJob); // output: video editor
}
employment()