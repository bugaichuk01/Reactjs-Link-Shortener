import React from 'react';

function TableItem({link, copy}: any) {
    return (
        <tr>
            <td>{link.id}</td>
            <td
                className='text-secondary'
                style={{cursor: 'pointer'}}
            >
                {link.target}</td>
            <td
                className='text-primary'
                style={{cursor: 'pointer'}}
                onClick={() => copy(`${process.env.REACT_APP_URL}/${link.short}`)}
            >
                {`${process.env.REACT_APP_URL}/${link.short}`}</td>
            <td>Переходы: {link.counter}</td>
        </tr>
    );
}

export default TableItem;