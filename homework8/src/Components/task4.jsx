import React, {useState, useEffect} from 'react'

const task4 = () => {
    const [coments, setComents] = useState([]);
    const [updete, setUpdete] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                if (!response.ok) {
                    throw new Error('error');
                }
                const data = await response.json();
                setComents(data);
            } catch (error) {
                console.error(`${error}`);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {

        const isUpdated = JSON.stringify(coments) !== JSON.stringify(prevComents);
        
        if (isUpdated) {
            setUpdete(true);
        } else {
            setUpdete(false);
        }
    }, [coments]);

    const prevComents = coments.slice();

    return  (
        <div>
            <h1>Coments</h1>
            <ul>
                {coments.map(coment => (
                    <li key={coment.id}>
                        <strong>{coment.name}</strong>
                        <p>{coment.body}</p> 
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

export default task4





