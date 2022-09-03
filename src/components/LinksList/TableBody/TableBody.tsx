import React from 'react';
import {ILink} from "../../../types/ILink";
import {useTypedSelector} from "../../../_hooks/useTypedSelector";
import {TableItem} from "../TableItem/TableItem";

interface TableBodyTypes {
    copy: (value: string) => void
}

export const TableBody: React.FC<TableBodyTypes> = ({copy}) => {
    const {limited} = useTypedSelector(state => state.links);

    return (
        <tbody>
        {limited && limited.map((link: ILink, index) => (
            <TableItem link={link} key={index} copy={copy}/>
        ))}
        </tbody>
    );
}
