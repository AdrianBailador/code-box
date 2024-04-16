import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className={'not-found'}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/NextJs/basics-of-next/public">Return Home</Link>
        </div>
    );
}