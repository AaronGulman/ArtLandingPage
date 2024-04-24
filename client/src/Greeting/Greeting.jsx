// import React, {useEffect} from 'react'


import style from "./Greeting.module.css"

// import female from '../assets/female.jpg'

function Header(){


	return(
		<div className={style.body}>
			<div>
			<h1 className={style.header}>Hello!</h1>
				<p className={style.mainParagraph}>
				Step into <span className={style.span}>my world</span>, <br></br>where  <span className={style.span}>artistry</span> meets  <span className={style.span}>experience</span>. <br></br></p>
				<p className={style.paragraph}>With 1000 years of passion and a formal art diploma, <br></br>each stroke tells a story, each piece a journey. <br></br>Welcome to my creative sanctuary.
				</p>
				<button className={style.button} type="submit" href="#order">ORDER NOW</button>
			</div>

			{/* <img className={style.image} src={female} id="female" alt="female" height="450" width="350"/> */}

		</div>
	)
}


export default Header;