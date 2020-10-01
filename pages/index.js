
import Head from 'next/head'
import { useRouter } from 'next/router'


export default function Main() {
    const router = useRouter()
    return (
        <dev>
            <Head>
                <title>...</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <h3>Welcome to getstart...</h3>
            <a class="btn btn-info" onClick={() => router.push('/Home')}> login..</a>

        </dev>

    )
}
