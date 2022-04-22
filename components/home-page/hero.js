import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src='/images/site/gabi.jpg' alt='image showing gabrijel' width={300} height={300} />
			</div>
			<h1>Hi, I'm Gabrijel</h1>
			<p>I am currently learning NextJS and I have made this blog as a part of a tutorial</p>
		</section>
	);
}

export default Hero;
