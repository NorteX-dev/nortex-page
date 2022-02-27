import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<Head>
					<title>NorteX</title>
					<meta name="description" content="Web & bot developer." />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<img src="" alt="" />
					<h1 className={styles.title}>NorteX</h1>

					<p className={styles.description}>
						<span style={{ color: "#5f25da" }}>Web</span>, <span style={{ color: "#2573da" }}>bot</span> and{" "}
						<span style={{ color: "#25dad4" }}>plugin</span> developer.
					</p>

					<a href={"#more"} className={styles.cta}>
						Learn more
					</a>
				</main>
			</div>

			<section className={styles.technologies}>
				<a id={"more"} style={{ marginTop: "20px" }} />
				<h1 className={styles.header}>What I know:</h1>
				<div className={styles.gridWrapper}>
					<div className={styles.grid}>
						<div className={styles.card}>
							<h2>
								<Image src={"/js.png"} width={"32"} height={"32"} className={styles.image} />
								<span>JavaScript</span>
							</h2>
							<p>Used in all of my websites as well as embedded in Node apps.</p>
						</div>

						<div className={styles.card}>
							<h2>
								<Image src={"/nodejs.png"} width={"32"} height={"32"} className={styles.image} />
								<span>Node.JS</span>
							</h2>
							<p>I use Node.JS to create Express servers for my websites as well as Discord bots.</p>
						</div>

						<div className={styles.card}>
							<h2>
								<Image src={"/react.png"} width={"32"} height={"32"} className={styles.image} />
								<span>React.JS & Next</span>
							</h2>
							<p>
								My go-to library for front-end website development. I use it mostly with{" "}
								<code>Next.JS</code> to enable <i>SSR</i>.
							</p>
						</div>
						<div className={styles.card}>
							<h2>
								<Image src={"/mongodb.png"} width={"32"} height={"32"} className={styles.image} />
								<span>MongoDB</span>
							</h2>
							<p>
								My favorite database. I use it for pretty much all mid-popularity applications I
								develop.
							</p>
						</div>

						<div className={styles.card}>
							<h2>
								<Image src={"/html.png"} width={"32"} height={"32"} className={styles.image} />
								<span>HTML, CSS</span>
							</h2>
							<p>
								In conjunction with <code>React.JS</code>, used to create my website designs and style
								them afterwards.
							</p>
						</div>

						<div className={styles.card}>
							<h2>
								<Image src={"/postgres.png"} width={"32"} height={"32"} className={styles.image} />
								<span>PostgreSQL</span>
							</h2>
							<p>
								My second-choice database which I choose for web apps that are designed for higher
								traffic.
							</p>
						</div>

						<div className={styles.card}>
							<h2>
								<Image src={"/java.png"} width={"32"} height={"32"} className={styles.image} />
								<span>Java</span>
							</h2>
							<p>
								Primarily used for making Minecraft plugins. Sometimes I also create some hobby
								Minecraft mods.
							</p>
						</div>
						<div className={styles.card}>
							<h2>
								<Image src={"/cs.png"} width={"32"} height={"32"} className={styles.image} />
								<span>C# (.NET)</span>
							</h2>
							<p>Used for making Windows Forms and WPF windows applications and Unity games.</p>
						</div>

						<div className={styles.card}>
							<h2>
								<Image src={"/sysadmin.png"} width={"32"} height={"32"} className={styles.image} />
								<span>System Admin</span>
							</h2>
							<p>
								Knowledge of proxies such as <code>Nginx</code> or <code>Apache</code> and forwarding
								domains to servers.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className={styles.container}>
				<section className={styles.contact}>
					<a id={"contact"} style={{ marginTop: "20px" }} />
					<h1 className={styles.header}>Contact Me:</h1>
					<div className={styles.grid}>
						<div className={styles.el}>
							<a href={"https://discord.com/users/180280668239036416"} target={"_blank"}>
								<div>
									<Image src={"/discord.png"} width={"128"} height={"128"} />
								</div>
								NorteX#2978
							</a>
						</div>
						<div className={styles.el}>
							<a href={"https://github.com/NorteX-dev"} target={"_blank"}>
								<div>
									<Image src={"/github.png"} width={"128"} height={"128"} />
								</div>
								NorteX-dev
							</a>
						</div>
						<div className={styles.el}>
							<a href={"mailto:contact@nortex.xyz"} target={"_blank"}>
								<div>
									<Image src={"/email.png"} width={"128"} height={"128"} />
								</div>
								contact@nortex.xyz
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
