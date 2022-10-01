import classNames from 'classnames/bind';
import SliderSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Banner.module.scss';
import Image from '~/components/Image';
import { imgBannerExp } from '~/assets/imgExmaple';
import { ButtonSlider } from '~/components/CusButtonSlider';

const cx = classNames.bind(styles);

function Banner({ props }) {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props,
        nextArrow: <ButtonSlider next />,
        prevArrow: <ButtonSlider prev />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-list')}>
                <SliderSlick {...settings}>
                    {imgBannerExp.map((img, index) => (
                        <Image className={cx('slider-item')} key={index} src={img.src} alt={img.alt} />
                    ))}
                </SliderSlick>
            </div>
        </div>
    );
}

export default Banner;
