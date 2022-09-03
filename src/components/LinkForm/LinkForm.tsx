import React, {useState} from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import { useCopyToClipboard } from 'usehooks-ts';
import {useActions} from "../../_hooks/useActions";
import {getLinks, getShorterLink} from "../../store/actionCreators/links";

export const LinkForm = () => {
    const [fullLink, setFullLink] = useState<string>('');
    const {link} = useTypedSelector(state => state.links);
    const {accessToken} = useTypedSelector(state => state.auth);

    const dispatch = useActions();

    const [value, copy] = useCopyToClipboard();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullLink(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getShorterLink({accessToken, link: fullLink}))
        dispatch(getLinks({accessToken}))
    }

    return (
        <div>
            <h1>Сокращение ссылок</h1>
            <form className='d-flex' onSubmit={handleSubmit}>
                <input
                    className='form-control w-25 m-1'
                    value={fullLink}
                    onChange={handleChange}
                    type="text"
                />
                <button className='btn btn-primary m-1' type='submit'>Отправить</button>
            </form>
            {link &&
                <div
                    style={{cursor: 'pointer'}}
                    onClick={() => copy(link)}
                    className="alert alert-success w-100 mt-4 m-1"
                >
                    <strong>Результат:</strong> {link}
                </div>}
            {value &&
                <div  className="alert alert-info w-100 mt-4 m-1">
                   Ссылка была скопирована!
                </div>
            }
        </div>
    );
}
