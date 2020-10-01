
import Layout from './Layout'
import Head from 'next/head'
import {useRouter} from 'next/router'


export default function Main() {
    // const router = useRouter()
    return (
        <dev>
            <Head>
                <title>...</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>

            <Layout>
                <h3>Welcome to getstart...</h3>
            </Layout>
            <button type="button" className="btn btn-primary">click</button>

        </dev>

    )
}
