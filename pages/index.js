
import Head from 'next/head'
import { useRouter } from 'next/router'


export default function Main() {
    const router = useRouter()
    return (
        <dev className="container">
            <Head>
                <title>...</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <h3>Welcome to getstart...</h3>
            <br/><br></br>
            <a className="btn btn-info" onClick={() => router.push('/Home')}> login..</a>
            <style jsx>{`
                .container {
                    height: auto;
                    display: flex;
                    flex-direction: column;
                }
                h3 {          
                    width: auto;
                    align-self: center;
                    margin: 10 100px;
                    color: blue;
                    padding: 10px;

                }
                a {
                    padding: 10px;
                    margin: 10px;
                    color: green;
                }
            `}
            </style>
        </dev>

    )
}
