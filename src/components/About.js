import React from 'react'

export default function About(props) {
    return (
        <div className="container my-3" >
            <div className="container containerAbout" style={{backgroundColor: props.mode === 'light' ? 'dark': 'light', color: props.mode === 'dark' ? 'light': 'dark', border: props.mode === 'dark' ? 'light':'dark'}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam debitis laborum enim minima ex sed tempora rem. Quas beatae ullam sit in. Illum similique, sit sapiente velit animi architecto repellat autem in, reprehenderit labore aperiam optio, veritatis laboriosam a tempore at perspiciatis voluptas! Eveniet quas incidunt rem beatae minima!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsum officia repellat, explicabo harum assumenda possimus in vitae unde, odit tempore cum optio repellendus. Omnis, molestiae et aut sapiente tempora, repellendus voluptatibus totam esse earum aperiam dolorem porro voluptate maiores nisi. Quam obcaecati temporibus neque animi molestias ut eos necessitatibus debitis tenetur, aliquam magnam cum deleniti optio, numquam assumenda aspernatur rem inventore, distinctio vitae et exercitationem. Doloribus fugit atque ratione eos magnam in ipsum sequi. Voluptatum dolore, corrupti mollitia sed quibusdam officiis autem quas inventore assumenda est itaque dicta, nobis dolorem temporibus odio aspernatur. Aspernatur magnam tempora eos? Consequatur, blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos rerum odit modi rem non mollitia cumque dicta illo fuga.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, at nobis asperiores qui voluptatum eos. Voluptates odio doloremque voluptas explicabo officiis, porro aliquid? Quod odio eveniet suscipit a officia eius repudiandae ad, amet exercitationem ducimus velit atque saepe, animi quidem. Eligendi quo omnis reiciendis facilis, exercitationem et soluta maiores! Ex numquam ipsam molestiae repellendus, officia hic quisquam quis? Pariatur, nisi! Obcaecati est veritatis optio delectus deleniti odit libero similique maiores sequi molestiae. Earum quae consequuntur asperiores, quod pariatur ducimus dignissimos quasi cupiditate? Omnis sed voluptates saepe quaerat perferendis, reprehenderit ratione perspiciatis soluta iure illo ipsum cum doloremque ullam non sunt!
                    
                </p>
            </div>
        </div>
    )
}
