import Navbar from '../components/Navbar';
import '../styles/globals.css';
import logo from '/public/blue-logo.png';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar logo={logo}/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
