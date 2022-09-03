import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {getPageCount, getPagesArray} from "../../helpers/getPagesArray";
import {useActions} from "../../_hooks/useActions";
import {getLinks} from "../../store/actionCreators/links";

interface PaginationTypes {
    setOffset: (value: string) => void;
}

export const Pagination: React.FC<PaginationTypes> = ({setOffset}) => {
    const {accessToken} = useTypedSelector(state => state.auth);
    const {links} = useTypedSelector(state => state.links);

    const dispatch = useActions();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [pages, setPages] = useState<number[]>([]);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
        const stringOffset: string = (page * 10 - 10).toString();
        setOffset(stringOffset);
    }

    useEffect(() => {
        dispatch(getLinks({accessToken}))
        setTotalPages(getPageCount(links.length));
        setPages(getPagesArray(totalPages));
    }, [accessToken, dispatch, links.length, totalPages])

    return (
        <div className='d-flex'>
            {pages.map((page: number, index) => (
                <div
                    key={index}
                    style={{cursor: 'pointer'}}
                    onClick={() => handleChangePage(page)}
                    className={'m-1 border-2 p-2 border ' + (currentPage === page && 'border-primary')}
                >
                    {page}
                </div>
            ))}
        </div>
    );
}
