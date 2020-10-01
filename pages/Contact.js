import Link from 'next/link'
import Nav from './Nav'
import Head from 'next/head'

export default function ContactPage() {
    return (
        <dev>
            <Head>
                <title>Style</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <dev>
                <Nav></Nav>
                <h2>contact.............</h2>
                <br />
                <Post id='/p/con.js' title='post.js'></Post>
                <br /><br />
                <img src="cinqueterre.jpg" class="img-circle" alt="Cinque Terre"></img>
            </dev>
        </dev>
    )
}
function Post(props) {
    return (
        <dev>
            <Link href={`./component/post?title=${props.title}`}>
                <button type="button" className="btn btn-primary">{props.title}</button>
            </Link>
        </dev>
    )
}