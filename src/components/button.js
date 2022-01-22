import { useState } from "react"

const Button = ({ children, gradient, customCss }) => {
	const [css, setCss] = useState(gradient ? 'bg-gradient-to-r text-white from-blue-300 via-blue-400 to-blue-800' : 'border border-blue-500')
	
	return (
		<div className={`font-poppins flex justify-center items-center py-2 w-36 px-2 h-10 rounded-lg ${css} ${customCss}`}>
			{children}
		</div>
	)
}

export default Button;