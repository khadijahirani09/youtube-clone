 export const API_KEY ='AIzaSyCAV985KLpHal2s_YwHQIsiv_PK_LRKfRw';

  export const value_converter =( value)=>{
   if(value>=1000000){
    return  Math.floor(value/1000000)+"M";
   }
   else if (value>=1000){
     return  Math.floor(value/1000)+"K";
   }
   else{
    return value;
   }
 }