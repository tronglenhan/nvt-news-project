import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import './dashboard.scss';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const user = useSelector((state) => state.user.currentUser);
	if(!user){
		return <Navigate to={'/signin'}></Navigate>
	}
	else{
		return (
			<div className="dashboard">
				<Sidebar />
				<div className="dashboard__container">
					<Navbar />
					<div className="widgets">
						<Widget type="user" />
						<Widget type="order" />
						<Widget type="earning" />
						<Widget type="balance" />
					</div>
					<div className="charts">
						<Featured />
						<Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
					</div>
					<div className="list-container">
						<div className="list-container__item">Latest Transactions</div>
						<Table />
					</div>
				</div>
			</div>
		);
	}

};

export default Dashboard;
