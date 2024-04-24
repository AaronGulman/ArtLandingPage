
import style from "./Header.module.css"

function Header(){
	return(
	<header className={style.header}>
	<h1 className={style.pageName}>Landing Page</h1>
		<nav className={style.nav}>
			<ul className={style.ul}>
				<li className={style.list}><a className={style.links} href="#projects">Projects</a></li>
				<li className={style.list}><a className={style.links} href="#offers">Offers</a></li>
				{/* <li className={style.list}><a className={style.links} href="#">Contact</a></li> */}
				<li className={style.list}><a className={style.links} href="#contact">Contact</a></li>
				<li className={style.contact}><a className={style.links} href="#order">Order</a></li>
			</ul>
		</nav>
	</header>
	)
}


export default Header;