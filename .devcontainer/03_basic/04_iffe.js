// imediately invoked funtion expression (IIFE)
// sometime gloabl variable make polution in prgaram so tomconatrol the pollution we use iffi funtion
// function chai(){
//     console.log(`DB CONNECTION`);
    
// }
// chai()
(function chai(){
    //named iffe
    console.log(`DB CONNECTION`);
    
})() ;// if we want to execute thte function immediately then we write it in () usually use in api loading the iffi funtion use
//";" use it at the end so we say js to where that funtion will be stop otherwise it. give error on other funtion
(()=>{
    console.log(`DB CONNECTION TWO` );
})();
((name)=>{
    //unnamed iffi
    console.log(`DB CONNECTION THREE ${name} `);
})('hina');


