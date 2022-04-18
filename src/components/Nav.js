import { Container, Button, Row, Col } from 'react-bootstrap';
export default function Nav(props) {
	return (
		<nav className='bg-danger p-4 d-flex justify-content-center align-items-center' style={{ height: props.height }}>
			<Container>
				<Row>
					<Col md className='text-center'>
						<img src='./images/logo.svg' className='img-fluid shadow-4 m-auto' alt='...' />
					</Col>
					<Col className='text-center my-5 my-md-0'>
						<Button className='text-dark ' variant='light'>
							Try It Free
						</Button>
					</Col>
				</Row>
			</Container>
		</nav>
	);
}
