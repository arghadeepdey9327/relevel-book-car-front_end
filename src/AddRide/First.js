import {HiUserCircle} from 'react-icons/hi'
import {AiTwotoneCheckCircle} from 'react-icons/ai';
import {SlCalender} from 'react-icons/sl';
import PageSchema from "../PageSchema";
const First=()=>{
    return  <>
            <img src='travel.jpg' alt="car image" className='background'/>
    <div className="container row round-border addRide">
        <PageSchema className="col-4" Icon={<AiTwotoneCheckCircle/>} text=" Leaving from..."/>
        <PageSchema className="col-3" Icon={<AiTwotoneCheckCircle/>} text=" Going to..."/>
        <PageSchema className="col-2" Icon={<SlCalender/>} text=" Today"/>
        <PageSchema className="col-1" Icon={<HiUserCircle/>}/>
     <PageSchema className="col-1 btn" text=" search"/>
    </div>
    </>
};
export default First;
