import React from 'react';
import "./banner.css";
type BannerProps = {
    bgImage: string; // Explicitly typing the bgImage prop
};

function Banner({ bgImage }: BannerProps) {
    return (
        <div className="main">
            <div
                className="container"
                style={{ backgroundImage: `url(${bgImage})` }} // Use `url()` to apply image
            >

                <div className="contant">
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores alias numquam eveniet ab autem ipsum explicabo inventore vitae fugit, hic, incidunt, provident odio culpa mollitia nam doloribus magni voluptate earum! </h2>

                    <ul className='bnlist'>
                        <li className='con'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde quas sed alias asperiores necessitatibus, quae quisquam voluptas tenetur. Aspernatur magni facilis officiis, quod consectetur exercitationem nam vel beatae dolore!</li>
                        <li className='con'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptas eos autem qui magni. Culpa autem at labore nemo hic perspiciatis architecto, maiores tempora id ullam eum nulla adipisci nisi.</li>
                        <li className='con'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reiciendis modi eligendi odio facere non nobis minima aut praesentium possimus numquam quisquam sunt, inventore minus. Itaque consequuntur assumenda earum voluptas!</li>

                    </ul>
                </div>

                <div className='btn-main'>

                    <button className='btn'>Click me..</button>
                </div>

            </div>
        </div>
    );
}

export default Banner;
