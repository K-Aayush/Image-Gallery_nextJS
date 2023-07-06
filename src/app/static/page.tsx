import { UnsplashImg } from "@/models/unsplashImg";
import Image from "next/image";

export default async function StaticPage() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImg = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className="d-flex flex-column align-items-center">
            <Image className="rounded shadow mw-100 h-100"
            src={image.urls.raw}
             width={width}
             height={height}
             alt={image.description}
             />
        </div>
    );
}