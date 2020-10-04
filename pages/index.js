
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import GlobalStyles from './style.tsx'

export default function Main() {
    const router = useRouter()
    return (
        // <html>
        <div className="container">
            <Head>
                <title>GetStart - SSS</title>
                {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link> */}
            </Head>
            <h2>Welcome to getstart...</h2>
            <br /><br></br>
            <Link href='/Home'>
                <a className="button"> login..</a>
            </Link>
            <GlobalStyles />
        </div>
        // </html>
    )
}
