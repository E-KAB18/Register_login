import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";

export default function ImgMediaCard() {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.container}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="spongebob"
					// height="140"
					image="https://memegenerator.net/img/instances/81789792/welcome-to-the-team-hope-you-like-memes.jpg"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Welcome to my page!
					</Typography>
					<Typography variant="body2" color="text.secondary">
						lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
					<Button size="small" onClick={handleLogout}>
						Logout
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
