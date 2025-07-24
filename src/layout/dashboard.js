import './css/dashboard.css';
import axios from 'axios';
import Budget from './component/expenseBudget';
import TotalCount from './component/totalCountBudget';
import TicketList from './component/ticketlist';
import TicketHistory from './component/pasttickets';

function Dashboard(){
    return(
        <div className='container width-height-f'>
            <Budget />
            <TotalCount />
            <TicketHistory />
            <TicketList />
            <div className='bottom flex flex-align-center flex-justify-center'>
                <button className='button'>Hello world</button>
            </div>
        </div>
    )
}

export default Dashboard;