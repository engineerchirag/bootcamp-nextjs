import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout/layout';

/**
 * Dynamic Routing ==>
 * [id].js is used to catch a dynamic path at single level
 * [...id].js is used to catch all nested route requests.
 * Eg for /posts/a/b/c route id should be ['a', 'b', 'c'] in getStaticPaths
 * [[...id]].js optinal catch all routes.
 * Eg. pages/post/[[...slug]].js will match /post, /post/a, /post/a/b, and so on.
 */

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
