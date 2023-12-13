import { FaUtensils, FaUsers, FaChartLine, FaMoneyBillWave, FaHeart, FaCogs } from 'react-icons/fa';

import styled, { css } from 'styled-components';
const CardZoom = styled.div`
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;


const ExtraOne = () => {
    return (
        // <CardZoom>
        <section className=" py-8 md:py-10 p-4 md:m-8">
            <div className="container mx-auto">
                <h2 className=" text-2xl md:text-4xl text-yellow-600 font-bold text-center mb-8 md:mb-12">Our Unique Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <CardZoom>
                        <div className=" p-6 rounded-md border border-yellow-600  shadow-md flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <FaUtensils className="rounded-full border-2  border-yellow-600 p-2 text-yellow-600 " size={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Efficient Restaurant Management</h3>
                            <p>
                                Our platform streamlines your restaurant management processes, making it easier than ever to handle reservations,
                                orders, and customer interactions.
                            </p>
                        </div>
                    </CardZoom>
                    {/* Feature 2 */}
                    <CardZoom>
                        <div className="p-6 border border-yellow-600 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <FaUsers className="rounded-full border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Customizable Menu Options</h3>
                            <p>
                                With our system, you have the flexibility to customize your menu based on seasonal changes or
                                special promotions, ensuring you can always meet your customers' preferences.
                            </p>
                        </div>
                    </CardZoom>
                    {/* Feature 3 */}

                    <CardZoom>
                        <div className="p-6 border border-yellow-600 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <FaChartLine className="rounded-full  border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
                            <p>
                                Gain insights into your restaurant's performance with real-time analytics.
                                Track popular dishes, and make data-driven decisions to optimize your business.
                            </p>
                        </div>
                    </CardZoom>
                    {/* Feature 4 */}

                    <CardZoom>
                        <div className="border border-yellow-600 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <FaMoneyBillWave className="rounded-full  border-yellow-600 text-yellow-600 p-2 border-2" size={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Cost-effective Solutions</h3>
                            <p>
                                Our cost-effective solutions help you manage your restaurant efficiently without breaking the bank. Save money and increase business profitability and performance with our tailored services.
                            </p>
                        </div>
                    </CardZoom>
                    {/* Feature 5 */}

                    <CardZoom>
                        <div className="border border-yellow-600 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <FaHeart className="rounded-full  border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Customer Engagement</h3>
                            <p>
                                Build strong relationships with your customers through our customer engagement features. Collect feedback, run promotions, and keep your customers coming back for more.
                            </p>
                        </div>
                    </CardZoom>
                    {/* Feature 6 */}

                    <CardZoom>
                        <div className="border border-yellow-600 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <FaCogs className="rounded-full border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Business Growth</h3>
                            <p>
                                Fuel your business growth with our strategic tools. Identify opportunities, expand your customer base, and stay ahead of the competition with our comprehensive solutions.
                            </p>
                        </div>
                    </CardZoom>

                </div>
            </div>

        </section>
        // </CardZoom>
        // <section className=" py-8 md:py-10 p-4 md:m-8">
        //     <div className="container mx-auto">
        //         <h2 className=" text-2xl md:text-4xl text-yellow-600 font-bold text-center mb-8 md:mb-12">Our Unique Features</h2>
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        //             {/* Feature 1 */}
        //             <div className=" p-6 rounded-md border border-yellow-600  shadow-md flex flex-col items-center justify-center text-center">
        //                 <div className="mb-4">
        //                     <FaUtensils className="rounded-full border-2  border-yellow-600 p-2 text-yellow-600 " size={100} />
        //                 </div>
        //                 <h3 className="text-xl font-semibold mb-4">Efficient Restaurant Management</h3>
        //                 <p>
        //                     Our platform streamlines your restaurant management processes, making it easier than ever to handle reservations,
        //                     orders, and customer interactions.
        //                 </p>
        //             </div>
        //             {/* Feature 2 */}
        //             <div className="p-6 border border-yellow-600 rounded-md shadow-md flex flex-col items-center justify-center text-center">
        //                 <div className="mb-4">
        //                     <FaUsers className="rounded-full border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
        //                 </div>
        //                 <h3 className="text-xl font-semibold mb-4">Customizable Menu Options</h3>
        //                 <p>
        //                     With our system, you have the flexibility to customize your menu based on seasonal changes or
        //                     special promotions, ensuring you can always meet your customers' preferences.
        //                 </p>
        //             </div>
        //             {/* Feature 3 */}

        //             <div className="p-6 border border-yellow-600 rounded-md shadow-md flex flex-col items-center justify-center text-center">
        //                 <div className="mb-4">
        //                     <FaChartLine className="rounded-full  border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
        //                 </div>
        //                 <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
        //                 <p>
        //                     Gain insights into your restaurant's performance with real-time analytics. Monitor sales,
        //                     track popular dishes, and make data-driven decisions to optimize your business operations.
        //                 </p>
        //             </div>
        //             {/* Feature 4 */}

        //             <div className="border border-yellow-600 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
        //                 <div className="mb-4">
        //                     <FaMoneyBillWave className="rounded-full  border-yellow-600 text-yellow-600 p-2 border-2" size={100} />
        //                 </div>
        //                 <h3 className="text-xl font-semibold mb-4">Cost-effective Solutions</h3>
        //                 <p>
        //                     Our cost-effective solutions help you manage your restaurant efficiently without breaking the bank. Save money and increase profitability with our tailored services.
        //                 </p>
        //             </div>
        //             {/* Feature 5 */}

        //             <div className="border border-yellow-600 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
        //                 <div className="mb-4">
        //                     <FaHeart className="rounded-full  border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
        //                 </div>
        //                 <h3 className="text-xl font-semibold mb-4">Customer Engagement</h3>
        //                 <p>
        //                     Build strong relationships with your customers through our customer engagement features. Collect feedback, run promotions, and keep your customers coming back for more.
        //                 </p>
        //             </div>
        //             {/* Feature 6 */}

        //             <div className="border border-yellow-600 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
        //                 <div className="mb-4">
        //                     <FaCogs className="rounded-full border-yellow-600 p-2 text-yellow-600 border-2" size={100} />
        //                 </div>
        //                 <h3 className="text-xl font-semibold mb-4">Business Growth</h3>
        //                 <p>
        //                     Fuel your business growth with our strategic tools. Identify opportunities, expand your customer base, and stay ahead of the competition with our comprehensive solutions.
        //                 </p>
        //             </div>

        //         </div>
        //     </div>

        // </section>
    );
};

export default ExtraOne;