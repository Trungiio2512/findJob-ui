import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import Select from 'react-select';
import { useState, useCallback } from 'react';
import JobItem from '~/components/JobItem';

const cx = classNames.bind(styles);
const options = [
    { value: 'all', label: 'Tất cả ' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
function Filter() {
    const [profession, setProfession] = useState([options[0]]);
    const [position, setPosition] = useState([options[0]]);
    const [typeJob, setTypeJob] = useState([options[0]]);
    const [address, setAddress] = useState([options[0]]);
    const handleClear = useCallback(() => {
        setProfession(null);
        setPosition(null);
        setTypeJob(null);
        setAddress(null);
        console.log('login');
    }, []);

    const customStyles = {
        control: (base) => ({
            ...base,
            fontSize: '1.4rem',
        }),
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                fontSize: '1.4rem',
            };
        },
        valueContainer: (defaultStyles) => {
            return {
                ...defaultStyles,
                flexWrap: 'nowrap',
            };
        },
    };
    console.log('render');
    return (
        <div className={cx('filter')}>
            <div className={cx('filter__bar')}>
                <div className={cx('filter__list')}>
                    <div className={cx('filter__item')}>
                        <Select
                            options={options}
                            styles={customStyles}
                            className={cx('react-select')}
                            placeholder={'Tìm kiếm nghành nghề'}
                            isMulti
                            value={profession}
                            onChange={setProfession}
                        />
                    </div>
                    <div className={cx('filter__item')}>
                        <Select
                            options={options}
                            styles={customStyles}
                            placeholder={'Tìm kiếm vị trí'}
                            value={position}
                            onChange={setPosition}
                        />
                    </div>
                    <div className={cx('filter__item')}>
                        <Select
                            options={options}
                            styles={customStyles}
                            placeholder={'Lựa chọn loại hình'}
                            value={typeJob}
                            onChange={setTypeJob}
                        />
                    </div>
                    <div className={cx('filter__item')}>
                        <Select
                            options={options}
                            styles={customStyles}
                            placeholder={'Tìm kiếm nghành nghề'}
                            value={address}
                            onChange={setAddress}
                        />
                    </div>
                </div>
                <div className={cx('filter__clear')}>
                    <button className={cx('filter__clear-btn')} onClick={handleClear}>
                        Xoá bộ lọc
                    </button>
                </div>
            </div>
            <div className={cx('filter__result')}>
                <div className={cx('filter__sum')}>
                    <strong>100</strong>
                    <span>Việc làm phù hợp</span>
                </div>
                <div className={cx('filter__list')}>
                    <div className={cx('grid')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-6 m-6 c-12')}>
                                <JobItem jobDetail />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
