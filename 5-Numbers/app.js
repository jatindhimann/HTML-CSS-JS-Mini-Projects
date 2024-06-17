const data = [...document.querySelectorAll('.data')];

// console.log(data);

const updateCount = (item) => {
    const value = parseInt(item.dataset.val);
    // console.log(value);
    const increment = Math.ceil(value/1000);
    let initialValue = 0;
    
    const increaseCount = setInterval(() => {
        initialValue += increment;

        if(initialValue > value){
            item.textContent  = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        item.textContent  = `${initialValue}+`;
    }, 1);
};

data.forEach((item)=>{
    updateCount(item);
});