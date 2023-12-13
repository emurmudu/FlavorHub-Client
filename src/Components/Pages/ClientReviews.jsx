// ClientReviews.js

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://i.ibb.co/K7RYj6y/girl2.jpg',
        review: 'The culinary delights surpassed expectations! From the first bite to the last, every dish was a symphony of flavors. The ingredients were fresh, and the chefs expertise shone through. The menu offered a diverse range, satisfying both adventurous and classic palates. Each plate was a work of art, showcasing a commitment to premium ingredients and meticulous preparation. A true haven for food enthusiasts!'
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://i.ibb.co/6RGBQ96/girl1.jpg',
        review: 'Impeccable service elevated the entire dining experience. Attentive and friendly staff anticipated our needs, creating a warm and inviting atmosphere. From recommendations to timely refills, their professionalism and courtesy were noteworthy. The seamless coordination among the team reflected a commitment to guest satisfaction. Exceptional service that left a lasting impression!'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        image: 'https://i.ibb.co/hKqm29s/boy1.png',
        review: 'The restaurants overall management was a masterclass in efficiency. The ambiance was carefully curated, striking a balance between sophistication and comfort. Reservation processes were smooth, and the staff demonstrated a keen awareness of guest experiences. The establishment exuded a well-organized charm, with an emphasis on cleanliness and attention to detail. A model of effective management that contributed to a memorable dining venture.'
    },
    {
        id: 4,
        name: 'Alice Brown',
        image: 'https://i.ibb.co/RhkW525/boy2.jpg',
        review: 'The ambiance and atmosphere were enchanting. The décor transported diners to a world of tasteful elegance, enhancing the overall dining experience. Soft lighting and thoughtful design elements created an intimate setting for both casual and celebratory occasions. The background music was curated to perfection, adding to the enchanting mood. Its clear that the establishment prioritizes creating a captivating atmosphere, making it an ideal destination for those seeking not just a meal but a memorable dining journey.'
    },
];

const ClientReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto mt-8 mb-12">
            <h2 className="text-2xl md:text-4xl text-yellow-600 font-bold text-center mb-8 md:mb-12">Client Reviews</h2>
            <Slider {...settings}>
                {clients.map((client) => (
                    <div key={client.id} className="text-center">
                        <img
                            src={client.image}
                            alt={client.name}
                            className="mx-auto rounded-full w-40 h-40 mb-4 mt-4"
                        />
                        <h3 className="text-2xl md:text-3xl text-yellow-600 font-semibold mb-4">{client.name}</h3>
                        <p className="text-gray-300">{client.review}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientReviews;
