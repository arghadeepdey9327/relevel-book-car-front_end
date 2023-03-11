import { useNavigate } from 'react-router';
import { AiOutlineCheck,AiOutlineEye } from 'react-icons/ai';
import Input from './Input';
import '../Style.css';
const SignIn=()=>{
   const navigate=useNavigate();
   const submit=()=>navigate('/addRide');
 return <form className="container" onSubmit={e=>e.preventDefault()}>
    <h1 className='form-h1'>Existing User, Sign In</h1>
    <h5 className='form-h5'>You are one step away</h5>
 <Input iconName={<AiOutlineCheck/>} labelName=" Email address" type="email"/>
 <Input iconName={ <AiOutlineEye/>} labelName=" Password" type="password"/>

 <div className='row forgot'> 
 <div className="mb-3 form-check col-10">
   <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
   <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
 </div>
 <div className='col-2'>
    Forgot Password?
 </div>
 </div>

 <div className="d-grid gap-2">
  <button className="btn btn-info" type="button" onClick={submit}>Sign In</button>
</div>

</form>
};
export default SignIn;
