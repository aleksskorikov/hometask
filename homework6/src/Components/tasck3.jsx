import React, {useState} from 'react';

const tasck3 = () => {

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [ValidInputName, setValidInputName] = useState(true);
    const [ValidInputTel, setValidInputTel] = useState(true);

        const NameChange = (event, setName, setValidInputName) => {
        const value = event.target.value;
        if (/^[a-zA-Zа-яА-Я]*$/.test(value) || value === '') {
            setName(value);
            setValidInputName(true);
        } else {
            setValidInputName(false);
        }
    };

    const TelChange = (event, setTel, setValidInputTel) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) || value === '') {
            setTel(value);
            setValidInputTel(true);
        } else {
            setValidInputTel(false);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!ValidInputName || !ValidInputTel || name === '' || tel === '') {
            alert('Форма має помилки або порожні поля.');
            return;
        } else {
            alert('Форма успішно відправлена!!!!!!');
        }

        setName('');
        setTel('');
        setValidInputName(true);
        setValidInputTel(true);
    }

    return (
        <>
            <form className='requestcall__form' onSubmit={handleSubmit}>
                <h2 className="form-title">Заповніть форму</h2>
                {!ValidInputName && <span className='form-span'>Ім'я повинно містити тільки букви</span>}
                    <input type="text" placeholder="Ім'я" className={`requestcall__form-input ${!ValidInputName ? 'error' : ''}`} value={name} onChange={(e) => NameChange(e, setName, setValidInputName)}/>
                {!ValidInputTel && <span className='form-span'>Телефон повинен містити тільки цифри</span>}
                    <input type="text" inputMode="numeric" placeholder="Телефон" className={`requestcall__form-input ${!ValidInputTel ? 'error' : ''}`} value={tel} onChange={(e) => TelChange(e, setTel, setValidInputTel)}/>
                <button className="form-btn">Замовити дзвінок</button>
            </form>
        </>
    )
}

export default tasck3