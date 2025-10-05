// import { getAllPosts, getPostBySlug } from "@/utils/markdown";
// import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
// import Markdown from "react-markdown";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: any) {
    // const data = await params;
    // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    // const post = getPostBySlug(data.slug, [
    //     "title",
    //     "author",
    //     "content",
    //     "metadata",
    // ]);

    // const siteName = process.env.SITE_NAME || "Your Site Name";
    // const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    // if (post) {
    //     const metadata = {
    //         title: `${post.title || "Single Post Page"} | ${siteName}`,
    //         author: authorName,
    //         robots: {
    //             index: true,
    //             follow: true,
    //             nocache: true,
    //             googleBot: {
    //                 index: true,
    //                 follow: false,
    //                 "max-video-preview": -1,
    //                 "max-image-preview": "large",
    //                 "max-snippet": -1,
    //             },
    //         },
    //     };

    //     return metadata;
    // } else {
    //     return {
    //         title: "Not Found",
    //         description: "No blog article has been found",
    //         author: authorName,
    //         robots: {
    //             index: false,
    //             follow: false,
    //             nocache: false,
    //             googleBot: {
    //                 index: false,
    //                 follow: false,
    //                 "max-video-preview": -1,
    //                 "max-image-preview": "large",
    //                 "max-snippet": -1,
    //             },
    //         },
    //     };
    // }
}

export default async function Post({ params }: any) {
    // const data = await params;
    // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    // const post = getPostBySlug(data.slug, [
    //     "title",
    //     "author",
    //     "authorImage",
    //     "content",
    //     "coverImage",
    //     "date",
    // ]);

    return (
        <div>
            <h1>Blog Post</h1>
        </div>
    );
}
