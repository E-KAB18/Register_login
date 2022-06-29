import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleChange = (e) => {
		// console.log(e.target.name, e.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(data);
		try {
			const url = "http://localhost:8000/api/signUp";
			const { data: res } = await axios.post(url, data);
			console.log(res);
			// console.log(res.message);
			navigate("/login");

			if (res.status === 500) throw new Error(`${res.message}`);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back!</h1>
					<Link to="/login">
						<button className={styles.white_btn}>Login</button>
					</Link>
				</div>

				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1> Create a new account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={data.firstName}
							required
							className={styles.input}
							onChange={handleChange}
						/>

						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={data.lastName}
							required
							className={styles.input}
							onChange={handleChange}
						/>

						<input
							type="email"
							placeholder="Email"
							name="email"
							value={data.email}
							required
							className={styles.input}
							onChange={handleChange}
						/>

						<input
							type="password"
							placeholder="Password"
							name="password"
							value={data.password}
							required
							className={styles.input}
							onChange={handleChange}
						/>

						<button className={styles.green_btn}>Sign Up</button>
						{error && <div className={styles.error_msg}>{error}</div>}
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
