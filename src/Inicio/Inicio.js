import imgUno from '../images/imgUna.jpg';
import imgDos from '../images/imgDos.jpg';
import imgTres from '../images/imgTres.jpg';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgUno}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgDos}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgTres}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Home;