import { type PropsWithChildren } from "react"

type HeaderProps = PropsWithChildren<{
    image: {
        src: string;
        alt: string;
    }
}>

const Header = ({image,children}:HeaderProps) => {
  return (
		<div>
			<img
				src={image.src}
				alt={image.alt}
			/>
			{/* <img
				{...image}
			/> */}
			{children}
		</div>
	);
}

export default Header