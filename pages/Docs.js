import Link from 'next/link'
import Layout from './Layout'
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import GlobalStyles from './style.tsx'
import Footer from './footer'

export default function Docs(props) {
    return (
        // <html>
        <div className="container">
            <Head>
                <title>Docs</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <div className='body'>
                <Layout />
                <h2>..... Docs ......</h2>
                {props.data.map(data => (
                    <dev className="link-list-div">
                        <br />
                        <Link href={`/component/post?title=${data.title}`}>
                            <a className="p-2">{data.title}</a>
                        </Link>
                    </dev>
                ))}
                <GlobalStyles />
                <Footer />
            </div>
        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    return {
        props: {
            data,
        },
		revalidate: 1,
    }
}
