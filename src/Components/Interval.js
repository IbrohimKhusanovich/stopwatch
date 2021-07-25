import React from 'react';
function Interval(props){
  let sum=0

 const result=props.intTime
 console.log(result);
 return(
  <div>
  {
    (props.intstatus==1)?
   result.map((prop)=>{
     return(
       <div key={Math.random()*100} className="interval">
         <p className='int-num'>{sum+=1}</p>
<p className='int-el'>
    <span>{(prop.h >= 10)? prop.h : "0"+ prop.h}</span>&nbsp;:&nbsp;
    <span>{(prop.m >= 10)? prop.m : "0"+ prop.m}</span>&nbsp;:&nbsp;
  <span>{(prop.s >= 10)? prop.s : "0"+ prop.s}</span>&nbsp;:&nbsp;
  <span>{(prop.ms >= 10)? prop.ms : "0"+ prop.ms}</span>
  </p> </div>)
 }):''
}
  </div>
 );}
export default Interval;