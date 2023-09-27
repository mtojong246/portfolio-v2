import { Carousel } from "react-responsive-carousel";
import { projects } from "@/app/data/projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp({ screenshots }: { screenshots: string[] }) {
    return (
        <Carousel showThumbs={false} showStatus={false}>
        {screenshots && screenshots.map((shot, i) => (
            <div className='w-full' key={i}>
                <img src={shot} alt='' className='object-fill object-center w-full'/>
            </div>
        ))}
        </Carousel>
    )
}