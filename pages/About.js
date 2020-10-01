import Nav from './Nav'
import Head from 'next/head'

export default function AboutPage() {
    return (
        <dev className='container'>
            <Head>
                <title>About</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <dev className='container2'>
                <Nav></Nav>
            <h2>welcome about... </h2>
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
                h2 {
                    align-self: center;
                    padding: 0px 150px;
                    margin: 0px;
                    color: green;
                }
            `}
            </style>
        </dev>
    )
}