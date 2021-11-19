import React from 'react'

export default function About(props) {
    return (
        <div className="container my-3" >
            <div className="container containerAbout" style={{backgroundColor: props.mode === 'light' ? 'dark': 'light', color: props.mode === 'dark' ? 'light': 'dark', border: props.mode === 'dark' ? 'light':'dark'}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam debitis laborum enim minima ex sed tempora rem. Quas beatae ullam sit in. Illum similique, sit sapiente velit animi architecto repellat autem in, reprehenderit labore aperiam optio, veritatis laboriosam a tempore at perspiciatis voluptas! Eveniet quas incidunt rem beatae minima!
                </p>
            </div>
        </div>
    )
}
