import Link from 'next/link'
import Nav from './Nav'
import Head from 'next/head'

export default function ContactPage() {
    return (
        <dev className='container'>
            <Head>
                <title>Style</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <dev>
                <Nav></Nav>
                <h2>contact us..</h2>
                <br />
                <Post id='/p/con.js' title='post.js'></Post>
                <br /><br />
                {/* <div>
                    <img src="cinqueterre.jpg" alt="Cinque Terre"></img>
                </div> */}

            </dev>
            <style jsx>{`
                .container {
                    align-item:center;
                    color: red;                    
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
function Post(props) {
    return (
        <dev className='container'>
            <Link href={`/component/post?title=${props.title}`}>
                <button type="button" className="btn btn-primary">{props.title}</button>
            </Link>
            <style jsx>{`
                .container {
                    width: auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    margin: 10px 100px;
                }
            `}
            </style>
        </dev>
    )
}