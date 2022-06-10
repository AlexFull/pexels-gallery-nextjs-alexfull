import DefaultLayout from 'layouts/default';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { Container } from 'styles/globals';
import { useFetch } from 'usehooks-ts';

const url = `https://blog.liqi.com.br/wp-json/posts`;

interface Post {
    title?: string;
    status?: string;
    content?: string;
}

const News: NextPage = () => {
    const { data, error } = useFetch<Post[]>(url);

    if (error) return <p>There is an error.</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <DefaultLayout>
            <Container>
                {data?.map((item, index) => (
                    <Fragment key={index}>
                        <article>
                            <h3>{item.title}</h3>
                            <small>{item.status}</small>
                            <section>
                                {
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                }
                            </section>
                        </article>
                    </Fragment>
                ))}
            </Container>
        </DefaultLayout>
    );
};

export default News;
