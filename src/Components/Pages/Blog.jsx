import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className="container mx-auto my-10 p-6 shadow-lg rounded-md">
            <Helmet>
                <title>FlavorHub | Blog</title>
            </Helmet>
            <h1 className=" text-2xl md:text-3xl text-center font-bold mb-6">Understanding Key Concepts</h1>

            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4">What is One-way Data Binding?</h2>
                <p className="mb-4">
                    One-way data binding is a programming concept that refers to the unidirectional flow of data in a
                    software application. In this paradigm, data is transferred only from the data source (usually the
                    application's state) to the user interface (UI) elements. Any changes in the data source are
                    automatically reflected in the UI, ensuring a consistent and predictable data flow.
                </p>
                <p>
                    This approach is commonly associated with front-end frameworks like React, where components are
                    designed to receive data as props, and any updates to the data trigger re-rendering of the component.
                    While it provides a clear data flow, developers should also consider the trade-offs and explore
                    two-way data binding in certain scenarios for a more interactive user experience.
                </p>
            </div>

            <div className="mb-8">
                <h2 className=" text-xl md:text-2xl font-bold mb-4">What is NPM in Node.js?</h2>
                <p className="mb-4">
                    NPM, or Node Package Manager, is a crucial component in the Node.js ecosystem. It serves as a
                    centralized repository for JavaScript libraries and tools, allowing developers to easily manage
                    project dependencies. NPM simplifies the process of sharing and distributing packages, streamlining
                    the development workflow.
                </p>
                <p>
                    With NPM, developers can install packages, manage versions, and handle project dependencies with
                    efficiency. The package.json file, often found in Node.js projects, lists the project's dependencies
                    and their versions, making it easy for other developers to replicate the project environment. NPM
                    provides a command-line interface to interact with packages, offering functionalities such as
                    installing, updating, and uninstalling packages.
                </p>
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Difference between MongoDB vs MySQL Database</h2>
                <div className="table-container overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Feature</th>
                                <th className="border border-gray-300 p-2">MongoDB</th>
                                <th className="border border-gray-300 p-2">MySQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">Data Model</td>
                                <td className="border border-gray-300 p-2">Document-oriented (NoSQL)</td>
                                <td className="border border-gray-300 p-2">Table-based (Relational)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Scalability</td>
                                <td className="border border-gray-300 p-2">Horizontal scaling (Sharding)</td>
                                <td className="border border-gray-300 p-2">Vertical scaling</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Schema</td>
                                <td className="border border-gray-300 p-2">Dynamic schema</td>
                                <td className="border border-gray-300 p-2">Static schema</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">ACID Compliance</td>
                                <td className="border border-gray-300 p-2">Not strictly ACID compliant</td>
                                <td className="border border-gray-300 p-2">ACID compliant</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blog;