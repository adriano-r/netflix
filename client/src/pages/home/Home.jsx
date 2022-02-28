import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		const getRandomList = async () => {
			try {
				const res = await axios.get(
					`lists ${type ? "?type=" + type : ""}${
						genre ? "&genre=" + genre : ""
					} `,
					{
						headers: {
							token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWVlYzY0YzMzYmRkMzU3NGJlOWVjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDM1MDIwNywiZXhwIjoxNjQ0NzgyMjA3fQ.7W1pdLhzQeWBPF-ajJsp3RNt5qc939z62ZP0o_L8CGE",
						},
					}
				);
				console.log(res);
				// setLists(res.data);
			} catch (err) {
				console.log(err);
			}
		};
	}, [type, genre]);
	return (
		<div className="home">
			<Navbar />
			<Featured type={type} />
			<List />
			<List />
			<List />
		</div>
	);
};

export default Home;
