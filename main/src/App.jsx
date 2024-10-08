import './App.css';
import Home from './pages/Home.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import Vans from './pages/Vans/VanList.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostVans from './pages/Host/vans/HostVans.jsx';
import HostVansDetails from './pages/Host/vans/HostVansDetails.jsx';
import HostLayout from './components/HostLayout,.jsx';
import VansPricing from './pages/Host/vans/HostVansPricing.jsx';
import VansPhtoto from './pages/Host/vans/HostVansPhoto.jsx';
import VansInfo from './pages/Host/vans/HostVansInfo.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import AuthRequired from './components/AuthRequired.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './server.js';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetail />} />
					<Route 
					path='/login' 
					element={<Login />} 
					/>

					<Route element={<AuthRequired />}>
						<Route path='host' element={<HostLayout />}>
							<Route index element={<Dashboard />} />
							<Route path='income' element={<Income />} />
							<Route path='reviews' element={<Reviews />} />
							<Route path='vans' element={<HostVans />} />
							<Route path='vans/:id' element={<HostVansDetails />}>
								<Route path='pricing' element={<VansPricing />} />
								<Route path='photos' element={<VansPhtoto />} />
								<Route path='info' element={<VansInfo />} />
							</Route>
						</Route>
					</Route>

					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
