import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = () => {
    const [petList, setPetList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then((res) => {
                console.log(res.data)
                setPetList(res.data)
            })
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petList.map((pet, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={`/details/${pet._id}`}><button>Details</button></Link> | 
                                        <Link to={`/update/${pet._id}`}><button>Edit</button></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/create"><button>Add a pet to the Shelter</button></Link>
        </div>
    )
}

export default Display
