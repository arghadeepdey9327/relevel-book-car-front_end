import {HiUserCircle} from 'react-icons/hi'
import { Link } from 'react-router-dom';
const Auth=()=>{
    return <div class="dropdown col-2">
  <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   <HiUserCircle/>
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/signin">Log in</Link></li>
    <li><Link class="dropdown-item" to="/">Sign up</Link></li>
  </ul>
</div>
};
export default Auth;
