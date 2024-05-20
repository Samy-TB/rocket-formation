import axios from 'axios';

export const load = async () => {
	const grocery = await axios.get('http://localhost:3000/api/grocery-list');

	const user = await axios.get('http://localhost:3000/api/users');

	return { props: { grocery: grocery.data.docs[0], user: user.data.docs[0] } };
};
