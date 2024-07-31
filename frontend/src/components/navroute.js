
import {AiFillDashboard, AiOutlineUser} from 'react-icons/ai'
const routes = [
    {
        label:'Dashboard',
        link:'/Adminpanel',
        icon: <AiFillDashboard size={22}/>
    },

    {
        label:'All Doctorss',
        link:'/ProductList',
        icon:<AiOutlineUser size={22}/>
    },
    {
        label:'Appointment list',
        link:'/AppointmentList',
        icon:<AiOutlineUser size={22}/>
    },
 


    {
        label:'All Payments ',
        link:'/PaymentList',
        icon:<AiOutlineUser size={22}/>
    }
    
]

export default routes