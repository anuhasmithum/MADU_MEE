import {useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import GlobalStyles from './style.tsx'

export default function Main() {
    const router = useRouter()

    useEffect(() => {
        // Prefetch the dashboard page
        router.prefetch('/Home')
    }, [])

    return (
        <div className="container">
            <Head>
                <title>GetStart - SSS</title>
            </Head>
            <h2>Welcome to getstart...</h2>
            <br /><br></br>
            <Link href='/Home'>
                <a className="button"> login..</a>
            </Link>
            <GlobalStyles />
        </div>
    )
}
