import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {useActions} from "../../_hooks/useActions";
import {getLinks} from "../../store/actionCreators/links";
import TableHead from "./TableHead/TableHead";
import {TableBody} from "./TableBody/TableBody";

interface LinksListTypes {
    copy: (value: string) => void;
    offset: string
}

export const LinksList: React.FC<LinksListTypes> = ({copy, offset}) => {
    const {accessToken} = useTypedSelector(state => state.auth);
    const [order, setOrder] = useState<string>('');

    const dispatch = useActions();

    useEffect(() => {
        dispatch(getLinks({accessToken, offset, limit: '10', order: order}))
    }, [accessToken, dispatch, offset, order])

    return (
        <table className='table table-bordered mt-4'>
            <TableHead order={order} setOrder={setOrder} />
            <TableBody copy={copy} />
        </table>
    );
}
