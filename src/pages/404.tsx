import { Link } from "gatsby";

const NotFound = () => (
	<>
		<title>404</title>
		<div>
			<div>
				<h1>404</h1>
				<p>Not found</p>
				<Link to="/">Go Home</Link>
			</div>
		</div>
	</>
);

export default NotFound;
