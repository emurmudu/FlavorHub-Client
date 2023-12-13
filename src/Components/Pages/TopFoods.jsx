import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const CardWrapper = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  ${(props) =>
        props.zoomed &&
        css`
      transform: scale(1.1);
    `}

  &:hover {
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const TopFoods = () => {
    const [topSellingFoods, setTopSellingFoods] = useState([]);
    const [zoomedIndex, setZoomedIndex] = useState(null);

    useEffect(() => {
        const fetchTopSellingFoods = async () => {
            try {
                const response = await axios.get('https://assignment-11-server-eight-woad.vercel.app/api/top-selling-foods');
                setTopSellingFoods(response.data.topSellingFoods);
            } catch (error) {
                console.error('Error fetching top-selling foods:', error.message);
            }
        };

        fetchTopSellingFoods();
    }, []);

    const handleZoom = (index) => {
        setZoomedIndex(index === zoomedIndex ? null : index);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl md:text-4xl text-yellow-600 font-bold text-center mb-8 md:mb-12">Top Selling Foods</h2>
            {topSellingFoods.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topSellingFoods.map((food, index) => (
                        <CardWrapper
                            key={index}
                            zoomed={index === zoomedIndex}
                            onMouseEnter={() => handleZoom(index)}
                            onMouseLeave={() => handleZoom(index)}
                        >
                            <CardImage src={food.image_url} alt={food.food_name} />
                            <CardContent>
                                <h3 className="font-bold text-xl mb-2">{food.food_name}</h3>
                                <p className="">Category: {food.category}</p>
                                <p className="">Price: ${food.price}</p>
                                <Link to="/allFoods">
                                    <button className="bg-yellow-600 text-white px-4 py-2 mt-2 inline-block rounded">Details</button>
                                </Link>
                            </CardContent>
                        </CardWrapper>
                    ))}
                </ul>
            ) : (
                <p>Loading top-selling foods...</p>
            )}
            <div className="text-center text-2xl md:text-3xl p-6">
                <Link to="/allFoods">
                    <button className="btn btn-block hover:bg-yellow-700">All Foods</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFoods;
