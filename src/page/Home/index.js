import Slider from '~/components/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Home() {
    return (
        <div className="app__home">
            <div className="app__home-slider">
                <Slider />
            </div>
            <div>Công ty hàng đầu</div>
            <div>Việc làm tốt nhất</div>
            <div>Ngành nghề trọng điểm</div>
            <div>Việc làm gợi ý</div>
        </div>
    );
}

export default Home;
