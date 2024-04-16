
export const metadata = {
    title: "Phones - Products - Basics of Next.js",
    description: "Learn more about our phones",
    keywords: ["phones", "products", "mobiles"],
    openGraph: {
        title: "Phones - Products - Basics of Next.js",
        description: "Learn more about our phones",
        type: "website",
        images: [
            {
                url: "https://example.com/image.jpg",
                width: 800,
                height: 600,
                alt: "A random image",
            },
        ],
    },
};

const PhonePage = props => {
    return (
        <h1>
            Phones Sub Page
        </h1>
    );
};

export default PhonePage;