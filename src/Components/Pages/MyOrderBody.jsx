
const MyOrderBody = ({ order, handleDelete }) => {
    const { _id, food_name, image_url, price, date, displayName } = order;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        {image_url && <img src={image_url} alt="Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {food_name}
            </td>
            <td>
                {price}
            </td>
            <td>{date}</td>
            <td>{displayName}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-warning btn-outline">
                    Delete
                </button>
            </th>

        </tr>
    );
};

export default MyOrderBody;