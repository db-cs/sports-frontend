import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';



export const ReactCarousel = () => {
        return (
            <Carousel showThumbs={false} dynamicHeight={false} infiniteLoop={true} showStatus={false} autoPlay={true} interval={5000} stopOnHover={false} showArrows={false} >
                <div>
                    <img src="https://3.files.edl.io/4bc4/22/07/18/155936-5d3de5ec-7c6e-468e-a44e-426904db5c54.jpg"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://tssaasports.com/event/files/2021/basketball-boys/114_teamphoto.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://3.files.edl.io/f9cb/21/09/21/144006-c167c263-b74b-4b74-8559-15a31c2216cd.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://3.files.edl.io/2ac0/22/04/15/163603-4d130cb1-792d-4cd5-86ff-3fbaa4d7adb5.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }


