import React, {useState, useEffect} from 'react'

const task3 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('!!!!!!!!!!!!!!!!!!!');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(`!!!!!!!! ${error}`);
            }  
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='conteiner'>
            {users.map((user) => (
                <div key={user.id} className='user-card'>
                    <p className='user-name'>{user.name} {user.username}</p>
                    <p className='user-email'> E-mail: {user.email}</p>
                    <div className="user-adress">Adress
                        <p className='user-sity'>Sity: {user.address.city }</p>
                        <p className='user-strit'>Strit: {user.address.street }</p>
                    </div>
                    
                </div>
                
            ))}
            </div>
        </>
    )
}

export default task3



