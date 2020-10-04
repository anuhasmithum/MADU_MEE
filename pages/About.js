
import Footer from './footer'
import Head from 'next/head'
import GlobalStyles from './style.tsx'
import Layout from './Layout'

export default function AboutPage() {
    return (
        // <html>
        <div className="container">
            <Head>
                <title>About</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <div className='body'>
                <Layout />
                <h2>About Us... </h2>
                <p>
                    In this article, we will use Next.js to build a static blog framework with the design and structure
                    inspired by Jekyll. I’ve always been a big fan of how Jekyll makes it easier for beginners to setup a
                    blog and at the same time also provides a great degree of control over every aspect of the blog for
                    the advanced users.

                    With the introduction of Next.js in recent years, combined with the popularity of React, there is a new
                    avenue to explore for static blogs. Next.js makes it super easy to build static websites based on the file
                    system itself with little to no configuration required
                </p>
                <GlobalStyles />
                <Footer />
            </div>
        </div>
        // </html>
    )
}