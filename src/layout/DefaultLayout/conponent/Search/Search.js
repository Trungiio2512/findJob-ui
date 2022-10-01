import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
//----------------------------------------------------------------
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import JobItem from '~/components/JobItem';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleSideResult = () => {
        setShowResult(false);
    };

    const handleChangeInput = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                // visible={true}
                render={(attrs) => (
                    <div tabIndex="-1" className={cx('search-result')} {...attrs}>
                        <PropperWrapper>
                            <span className={cx('search-title')}>Kết quả</span>
                            <div className={cx('search-list')}>
                                <JobItem />
                            </div>
                        </PropperWrapper>
                    </div>
                )}
                onClickOutside={handleSideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        spellCheck={false}
                        placeholder="Tìm kiếm công việc"
                        onChange={handleChangeInput}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
