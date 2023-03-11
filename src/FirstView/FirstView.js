import Auth from "./Auth";
import {SiGooglechat} from 'react-icons/si';
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdAddCircleOutline} from 'react-icons/io'
import PageSchema from '../PageSchema';
const FirstView=()=>{
    return <>
    <div className="first row">
        <PageSchema className="col-6" Icon={<SiGooglechat/>} text="BlaBlaCar"/>
        <PageSchema className="col-2 blue" Icon={<AiOutlineSearch/>} text="search"/>
        <PageSchema className="col-2 blue" Icon={<IoMdAddCircleOutline/>} text="Publish a ride"/>
   <Auth/>
   <hr style={{height:5}}/>
    </div>
  
    </>
};
export default FirstView;
