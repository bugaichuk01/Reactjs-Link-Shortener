import React, {useState} from 'react';
import {useCopyToClipboard} from "usehooks-ts";
import {LinksList} from "../LinksList/LinksList";
import {Pagination} from "../Pagination/Pagination";

export const Statistic = () => {
    const [offset, setOffset] = useState<string>('0');

    const [value, copy] = useCopyToClipboard();

    return (
        <div>
           <LinksList copy={copy} offset={offset} />
            {value &&
                <div className="alert alert-info w-100 mb-4 mt-4 m-1">
                    Ссылка {value} была скопирована!
                </div>}
           <Pagination setOffset={setOffset} />
        </div>
    );
}
