import { useState } from "react"
import data from "./data.json"
export default function ListKey() {
    const [listUser, setListUser] = useState(data);

    const renderLisUser = () => {
        const newArr = listUser.map((user) => {
                    return (
                        <li key={user.id}>
                            Id: {user.id} - Name: {user.name} - Age: {user.age}
                        </li>
                    );
                });
                return newArr;
    }
  return (
    <div>
        <h1>ListKeys</h1>
        <ul>
            {renderLisUser()}
        </ul>
    </div>
  )
}
