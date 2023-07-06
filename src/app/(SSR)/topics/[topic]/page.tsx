import { UnsplashImg } from "@/models/unsplashImg";
import Image from "next/image";
import styles from "./page.module.css"
import { Metadata } from "next";

// export const revalidate = 0;

interface PageProps {
    params: { topic: string },
    // searchParams: { [key: string]: string | string[] | undefined}
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
    return {
        title: topic + " - Image Gallery"
    }
}

export function generateStaticParams() {
    return ["health", "fitness", "coding"].map(topic => ({ topic }))
}


export default async function TopicPage({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const images: UnsplashImg[] = await response.json();

    return (
        <div>
            <h1>{topic}</h1>
            {
                images.map(image => (
                    <Image
                        src={image.urls.raw}
                        width={250}
                        height={250}
                        alt={image.description}
                        key={image.urls.raw}
                        className={styles.image}
                    />
                ))
            }
        </div>
    )
}