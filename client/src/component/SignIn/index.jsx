import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
// import { BiErrorCircle } from "react-icons/bi";

const SignUp = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(data);
		try {
			const url = "http://localhost:8000/api/signIn";
			const { data: res } = await axios.post(url, data);
			console.log(res);
			// console.log(res.message);
			if (res.status !== 500) {
				localStorage.setItem("token", res.token);
				window.location = "/";
			}
			if (res.status === 500) throw new Error(`${res.message}`);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					{/* form */}
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1> Login to your account</h1>

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

						<button className={styles.green_btn}>Sign In</button>
						{error && <p className={styles.error_msg}>{error}</p>}
						{/* {error && (
							<div className={styles.error_msg}>
								<BiErrorCircle className={styles.err_icon} />
								<span>{error}</span>
							</div>
						)} */}
					</form>
				</div>

				<div className={styles.right}>
					<h1>New Here!</h1>
					<Link to="/signup">
						<button className={styles.white_btn}>Sign Up</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
