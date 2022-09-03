import React from 'react';
import {ILink} from "../../../types/ILink";

interface TableItemTypes {
    link: ILink;
    copy: (value: string) => void
}

export const TableItem: React.FC<TableItemTypes> = ({link, copy}) => {
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
                onClick={() => copy(`${process.env.REACT_APP_URL}/s/${link.short}`)}
            >
                {`${process.env.REACT_APP_URL}/s/${link.short}`}</td>
            <td>Переходы: {link.counter}</td>
        </tr>
    );
}