import { Link } from "react-router-dom";
import notFound from '../../assets/notFound.jpg';

const ErrorPage = () => {

    return (
        <div>
            <div className='relative h-screen'>
                <img src={notFound} alt="Not Found" className="w-full h-full object-cover" />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                    <Link to='/'>
                        <button className='btn btn-outline btn-info mt-2'>Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;