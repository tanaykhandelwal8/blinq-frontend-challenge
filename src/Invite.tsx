import React, {useState} from 'react';
import axios from 'axios'

function Invite() {

    const newPerson = {
        "name":"Jane Doe",
        "email": "jdoe@gmail.com"
    }

    const [newUser, setNewUser] = useState({
        "name":"",
        "email":""
    })

    const sendData = () => {
        axios.post('https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth', newPerson)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            });

    }


    return (
        <div>
            <table>
                <tbody>
                <tr>
                <td>
                    <input type="text" placeholder="Name" name="name" />
                </td>
                <td>
                    <input type="email" placeholder="Email" />
                </td>
                <td>
                    <input type="text" placeholder="Confirm Email"/>
                </td>

                <td>
                    <button onClick={sendData}>Send</button>
                </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Invite;