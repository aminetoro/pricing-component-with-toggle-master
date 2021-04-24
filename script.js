const annuallyprices = [
199.99,
249.99,
399.99
]
const monthlyprices = [
    19.99,
    24.99,
    39.99
];
const changePrices = (vl)=>{
    if(vl === 'monthly'){
      prices.forEach((el,index)=>{
          el.textContent = monthlyprices[index];
      })
    }else{
        prices.forEach((el,index)=>{
            el.textContent = annuallyprices[index];
        })
    }
}
const prices = document.querySelectorAll('.priceblocks section h1 .dollarvalue');
prices.forEach((el,index)=>{
    el.textContent = monthlyprices[index];
})
const toggleannuallymonthly = (obj) => {
   if(obj.classList[1] === 'monthly'){
       obj.classList.remove('monthly');
       obj.classList.add('annually');
       changePrices('annually');
   }else{
    obj.classList.remove('annually');
    obj.classList.add('monthly');
    changePrices('monthly');
   }
    
}
