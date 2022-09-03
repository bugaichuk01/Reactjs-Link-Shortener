import React from 'react';

interface TableHeadTypes {
    order: string;
    setOrder: (value: string) => void;
}

const options = [
    {select: 'Ссылка', empty: '', desc: '&order=desc_target', asc: '&order=asc_target'},
    {select: 'Короткая ссылка', empty: '', desc: '&order=desc_short', asc: '&order=asc_short'},
    {select: 'Статистика', empty: '', desc: '&order=desc_counter', asc: '&order=asc_counter'},
]

const TableHead: React.FC<TableHeadTypes> = ({order, setOrder}) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrder(event.target.value);
    };

    return (
        <thead>
        <tr>
            <th>id</th>
            {options.map((option) => (
                <th key={option.desc}>
                    <span>{option.select}</span>
                    <select className='form-select' value={order} onChange={handleChange}>
                        <option value={option.empty}>--</option>
                        <option value={option.desc}>По убыванию</option>
                        <option value={option.asc}>По возрастанию</option>
                    </select>
                </th>
            ))}
        </tr>
        </thead>
    );
}

export default React.memo(TableHead)
