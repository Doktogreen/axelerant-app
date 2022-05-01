import React from 'react';
import { StyledSearchBox } from './StyledComponents';

const SearchBox = ({change, reference}) => {
    return (
        <div className='container search-container'>
            <div className='row'>
                <div className=''>
                    <form className='search-form'>
                        <StyledSearchBox className='search-box form-control' 
                            placeholder='Search By Event Title..' 
                            onChange={change}
                            ref={reference}
                            type='text' 
                        />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SearchBox;