"use client"

import { UnsplashImg } from "@/models/unsplashImg";
import Image from "next/image";
import { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import styles from "./searchPage.module.css"


export default function SearchPage() {

    const [searchResult, setSearchResult] = useState<UnsplashImg[] | null>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim();

        if (query) {

            try {
                setSearchResult(null);
                const response = await fetch("/api/search?query=" + query);
                const images: UnsplashImg[] = await response.json();
                setSearchResult(images);
            } catch (error) {
                console.log(error);
            }

        }

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="search-input">
                    <Form.Label>Search Query</Form.Label>
                    <Form.Control
                        name="query"
                        placeholder="E.g. cats, hotdogs, ..." />
                </Form.Group>
                <Button type="submit" className="mb-3">
                    Search
                </Button>
            </Form>

            <div className="d-flex flex-column align-items-center">
                {searchResult?.length === 0 && <p>Nothing Found. Try a different query!</p>}
            </div>

            {searchResult &&
                <>
                    {
                        searchResult.map(image => (
                            <Image
                                className={styles.image}
                                src={image.urls.raw}
                                width={250}
                                height={250}
                                alt={image.description}
                                key={image.urls.raw}
                            />
                        ))
                    }
                </>
            }
        </div>
    )
}