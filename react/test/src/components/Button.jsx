import React from 'react'

function Button({ text, variant = "primary" }) {

    const variants = {
        primary: "text-blue-700 border-blue-500 hover:bg-blue-500",
        danger: "text-red-700 border-red-500 hover:bg-red-500",
        success: "text-green-700 border-green-500 hover:bg-green-500",
        warning: "text-yellow-700 border-yellow-500 hover:bg-yellow-500",
    };
    return (
        <button className={`bg-transparent ${variants[variant]} font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded`}>
            {text}
        </button>
    )
}

export default Button