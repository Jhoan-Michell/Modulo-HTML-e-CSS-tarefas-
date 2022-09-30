const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL'
fetch(url + coins)
   .then(function(response){
   return response.json()
   })
   .then(function(data) {
   const dolarReal = data.USDBRL

   let estaData = new 
   Date(dolarReal.create_date)

   document.getElementById('title').innerHTML =
   dolarReal.name + " $"

   document.getElementById('thisdate').innerHTML = 
   estaData.toLocaleString()

   document.getElementById("maxvalue").innerHTML = 
   parseFloat(dolarReal.high).toLocaleString('pt-br',{
   style: 'currency',
   currency: 'BRL'
   })

   document.getElementById('minvalue').innerHTML = 
   parseFloat(dolarReal.low).toLocaleString('pt-br', {
   style: 'currency',
   currency: 'BRL'
   }) 

   
})

const url2 = 'https://economia.awesomeapi.com.br/last/'
const coins2 = 'BRL-VEF'
fetch(url2 + coins2)
   .then(function(response){
   return response.json()
   })
   .then(function(data) {
   const realBolivar = data.BRLVEF

   document.getElementById('titleRealBolivar').innerHTML =
   realBolivar.name + " $"

   document.getElementById("maxvalue2").innerHTML = 
   parseFloat(realBolivar.high).toLocaleString('pt-br',{
   style: 'currency',
   currency: 'BRL'
   })

   document.getElementById('minvalue2').innerHTML = 
   parseFloat(realBolivar.low).toLocaleString('pt-br', {
   style: 'currency',
   currency: 'BRL'
   }) 

})

 let expressao = '';
 let memoria = '';

 document.querySelectorAll(".press").forEach(item => {
   
 
   item.addEventListener('click',event => {
      switch(item.innerHTML){

         case '=':
               document.getElementById('expressao').innerHTML = document.getElementById('expressao').innerHTML + ' = ';
               document.getElementById('resultado').innerHTML = eval(expressao);
               expressao = '';
         break;
         case 'MC':
                memoria = '';
            break;
            case 'MR':
                if(memoria != ''){
                   expressao += memoria;
                    document.getElementById('resultado').innerHTML = '';
                    document.getElementById('expressao').innerHTML = expressao;
                }
            break;
            case 'M+':
                if(document.getElementById('resultado').innerHTML != ''){
                   
                    if(memoria != ''){
                       memoria = eval(memoria) + eval(document.getElementById('resultado').innerHTML);
                    }else{
                       memoria = eval(document.getElementById('resultado')).innerHTML;
                    }
                   
                }
            break;
            case 'L':
                expressao = ''
                document.getElementById('resultado').innerHTML = '';
                document.getElementById('expressao').innerHTML = '';
            break;    
            default:
                expressao += item.innerHTML;
                document.getElementById('resultado').innerHTML = '';
                document.getElementById('expressao').innerHTML = expressao;
        }
        
    });
    
}); 