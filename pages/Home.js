
import Layout from './Layout'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Main() {
    // const router = useRouter()
    return (
        <dev className='container'>
            <Head>
                <title>Home</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <Layout>
                <h3>Welcome to GetStart...</h3>
            </Layout>
            <Link href='/'>
                <a className="btn btn-info">go back</a>
            </Link>
            <style jsx>{`
                .container {
                    height: auto;
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                }
                h3 {
                    align-self: center;
                    padding: 10px 150px;
                    margin: 0px;
                    color: green;

                }
            `}
            </style>
        </dev>

    )
}
