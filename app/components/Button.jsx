import Link from 'next/link';
import React from 'react';

const Button = ({ text, link }) => {
    return (
        <div>
            <Link href={link ? link : './'}>
                <button>
                    {text}
                </button>
            </Link>
        </div>
    )
}

export default Button