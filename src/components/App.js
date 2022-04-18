import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Global';
import Nav from '../components/Nav';
import { theme } from './theme';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
	return (
		<ThemeProvider theme={theme} breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
			<GlobalStyle />
			<Nav height='100px' />
			<Container>
				<Row className='my-5'>
					<Col>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta labore quis dignissimos dolor ipsam enim voluptates mollitia quod, praesentium magnam repellendus nesciunt
							voluptate iure totam! Velit itaque tempora hic?
						</p>
						<Button>Get Started For Free</Button>
					</Col>
					<Col>
						<img src='./images/illustration-mockups.svg' className='img-fluid shadow-4' alt='...' />2 of 3<Button>test</Button>
					</Col>
				</Row>
			</Container>
		</ThemeProvider>
	);
}

export default App;
