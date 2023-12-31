import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import { Alert } from "@/components/bootstrap";

interface PageProps {
    params: { username: string },
}

async function getUser(username:string): Promise<UnsplashUser> {
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);

    return await response.json();
}

export async function generateMetadata({params: {username}}: PageProps): Promise<Metadata> {
    const user = await getUser(username);

    return{
        title: user.first_name + " " + user.last_name
    }
}

export default async function uernamePage({ params: { username } }: PageProps) {
   const user = await getUser(username);

    return(
        <div>
            <Alert>
                This Profile page uses <strong>generateMetadata</strong> to set the <strong>page title</strong> dynamically from the API response.
            </Alert>

            <h1>{user.username}</h1>
            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <a href={"https://unsplash.com/" + user.username}>Unsplash Profile</a>
        </div>
    )
}