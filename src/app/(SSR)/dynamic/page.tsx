import { UnsplashImg } from "@/models/unsplashImg";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
    title: 'Dynamic Fetching - Image Gallery',
}

export const revalidate = 0;

export default async function DynamicPage() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY, {
        // cache: "no-cache"/"nostore"
        // next: { revalidate: 0 }
    });
    const image: UnsplashImg = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page fetches <strong>fetches data dynamically</strong>.
                Everytime you refresh this page you will get new random image. 
            </Alert>
            <Image className="rounded shadow mw-100 h-100"
            src={image.urls.raw}
             width={width}
             height={height}
             alt={image.description}
             />
             by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
        </div>
    )

}