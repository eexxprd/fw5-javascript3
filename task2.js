const getmonth = (callback) =>{
    setTimeout(()=>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found',[]))
        }  
        month.map (nameMonth)

    }, 4000)
} 

function nameMonth(item){
    return [item].join(" ")
}

getmonth()

console.log(getmonth(nameMonth))