import Link from 'next/link'
import Nav from './Nav'
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'

export default function Docs(props) {
    return <dev className="container">
        <Head>
            <title>Docs</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>
        <Nav></Nav>

        <dev class="active">
            {props.data.map(data => (
                <dev className="container2">
                    <br />
                    <Link href={`/component/post?title=${data.title}`}>
                        <a className="p-2">{data.title}</a>
                    </Link>
                </dev>

            ))}
        </dev>
        <style jsx>{`
                .container {
                    align-item:center;
                    color: red;                    
                    display: flex;
                    flex-direction: column;
                }
                .container2 {
                    align-item:center;                    
                    display: flex;
                    flex-direction: column;
                }
                a {
                    align-self: center;
                    padding: 0px 150px;
                    margin: 0px;
                    color: blue;
                }
            `}
            </style>
        <h2>Docs.............</h2>
    </dev >
}

Docs.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    return { data }
}
