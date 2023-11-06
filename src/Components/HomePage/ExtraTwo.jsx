import { FaFacebook, FaTwitter } from 'react-icons/fa';
import fakeChefsData from './chef.json';
import { BsLinkedin } from 'react-icons/bs';


const ExtraTwo = () => {
    return (
        <div className="md:py-16 py-10 p-4 md:m-8 min-h-screen">
            <h1 className="text-4xl text-yellow-600 font-bold text-center mb-8 md:mb-12">Meet Our Chefs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {fakeChefsData.map((chef) => (
                    <div key={chef.id} className="card lg:card-side shadow-xl rounded-md">
                        <figure><img src={chef.image} alt={chef.name} /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl text-yellow-600 font-semibold mb-4">{chef.name}</h2>

                            <p className=" mb-4">{chef.description}</p>
                            <div className="flex items-center mb-2">
                                <p className="">Specialty: {chef.specialty}</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <p className=" font-bold">Experience: {chef.experience}</p>
                            </div>
                            <div className='text-yellow-600 flex flex-row items-center gap-2 md:gap-4'>
                                <a href="#" ><BsLinkedin size={20}></BsLinkedin></a>
                                <a href="#" ><FaFacebook size={20}></FaFacebook></a>
                                <a href="#" ><FaTwitter size={20}></FaTwitter></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ExtraTwo;