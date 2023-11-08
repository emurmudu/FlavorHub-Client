import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr key={user._id}>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th>{user.userCreated}</th>

                        </tr>)


                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;