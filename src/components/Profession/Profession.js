import Slider from 'react-slick';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Profession.module.scss';
import Item from '~/components/Item';
import { profession as professions } from '~/assets/imgExmaple';
import { ButtonSlider } from '~/components/CusButtonSlider';

const cx = classNames.bind(styles);

function Profession() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <ButtonSlider />,
        prevArrow: <ButtonSlider />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {professions.map((prrofesstion, index) => (
                <div key={index} className={cx('wrapper')}>
                    <Item profession hoverTitle />
                </div>
            ))}
        </Slider>
    );
}

export default Profession;
