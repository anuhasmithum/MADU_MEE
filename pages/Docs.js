import Link from 'next/link'
import Nav from './Nav'
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'

export default function Docs(props) {
    return <dev>
        <Head>
            <title>Docs</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>
        <Nav></Nav>

        <dev class="active">
            {props.data.map(data => (
                <dev>
                    <br />
                    <Link href={`/component/post?title=${data.title}`}>
                        <a>{data.title}</a>
                    </Link>
                </dev>

            ))}
        </dev>
        <h2>Docs.............</h2>
    </dev >
}

Docs.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    return { data }
}
