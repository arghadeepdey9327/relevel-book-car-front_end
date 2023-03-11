const Input=({labelName,iconName,type})=>{
    return  <div className="form-floating mb-3">
    <input type={type} className="form-control shadow" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 <label htmlFor="floatingInput">
   <div className='row'>
   <div className='col-11'>
  {labelName}
   </div>
   <div className='col-1'>
    {iconName}
   </div>
   </div>
 </label>
  
 </div>
};
export default Input;
