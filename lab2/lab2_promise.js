/*
purposes: create a new promis - API developer side
fetch that promise - web developer side
-async defination of function of that contains the fetch 
-await in front of the fecth

 */

// ---- API developer side -----
async function fetch_weataher(){
    const promise_weather = new Promise((resolve, reject) => {
        let isPaidMember = false
        if(isPaidMember){
            setTimeout(() => {
                 const weatherJSON = { moday: "sunny", tuesday: "rainy"}
            let waetherJSONstr = JSON.stringify(weatherJSON)
            resolve(waetherJSONstr)
            }, 2000)
        } else {
            reject("you must be a paid member accses")
        }
    })

    let result = await promise_weather
    console.log(result)
}

fetch_weataher()

let username = "bob"
console.log(username)

// ---- API developer side -----
