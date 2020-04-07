const getData = (cb) =>{
    setTimeout(()=>{
        console.log('get data');
        cb();
    }, 3000);
}

const showData = ()=>{
    console.log('show data');
}

getData(() =>{
    showData();
});
