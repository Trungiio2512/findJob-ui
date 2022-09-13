import classNames from 'classnames/bind';
import SliderSlick from 'react-slick';

import styles from './Slider.module.scss';
import Image from '~/components/Image';
import { imgExample } from '~/assets/imgExmaple';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slider({ props }) {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props,
        nextArrow: <Button next icon={<FontAwesomeIcon icon={faCircleArrowLeft} />} />,
        prevArrow: <Button prev icon={<FontAwesomeIcon icon={faCircleArrowRight} />} />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-list')}>
                <SliderSlick {...settings}>
                    {imgExample.map((img, index) => (
                        <Image className={cx('slider-item')} key={index} src={img.src} alt={img.alt} />
                    ))}
                </SliderSlick>
            </div>
        </div>
    );
}

export default Slider;
