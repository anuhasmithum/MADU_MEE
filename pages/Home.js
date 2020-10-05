
import Layout from './Layout'
import Head from 'next/head'
import Footer from './footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import GlobalStyles from './style.tsx'


export default function Main() {
    const router = useRouter()
    return (
        <div className="container">
            <Head>
                <title>Home</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <div className='body'>
                <Layout />
                <h2>Welcome to GetStart...</h2>

                <GlobalStyles />
                <p>
                    odio iure consequatur molestiae quibusdam necessitatibus quia sint

                    facilis modi saepe mollitia

                    vel nihil et molestiae iusto assumenda nemo quo ut

                    nobis suscipit ducimus enim asperiores voluptas

                    dolorum laboriosam eos qui iure aliquam

                    debitis accusantium ut quo facilis nihil quis sapiente necessitatibus

                    neque voluptates ratione

                    excepturi a et neque qui expedita vel voluptate

                    explicabo enim cumque porro aperiam occaecati minima

                    sed ab consequatur

                    non sunt delectus illo nulla tenetur enim omnis

                    excepturi non laudantium quo

                    totam quia dolorem et illum repellat voluptas optio

                    ad illo quis voluptatem temporibus

                    praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt

                    a eos eaque nihil et exercitationem incidunt delectus

                    autem temporibus harum quisquam in culpa

                    aut aut ea corporis

                    magni accusantium labore et id quis provident

                    consectetur impedit quisquam qui deserunt non rerum consequuntur eius

                    quia atque aliquam sunt impedit voluptatum rerum assumenda nisi

                    cupiditate quos possimus corporis quisquam exercitationem beatae

                    sed et ea eum

                    ipsa dolores vel facilis ut

                    sequi quae est et qui qui eveniet asperiores

                    quia modi consequatur vero fugiat

                    corporis ducimus ea perspiciatis iste

                    dolorem laboriosam vel voluptas et aliquam quasi

                    inventore aut nihil minima laudantium hic qui omnis

                    provident aut nobis culpa

                    esse et quis iste est earum aut impedit

                    qui consectetur id

                    aut quasi autem iste tempore illum possimus

                    ut asperiores perspiciatis veniam ipsum rerum saepe

                    qui molestiae voluptatibus velit iure harum quisquam

                    et labore eos enim rerum consequatur sunt

                    molestiae doloribus et laborum quod ea

                    facere ipsa nam eum voluptates reiciendis vero qui

                    asperiores illo tempora fuga sed ut quasi adipisci

                    placeat minima consequatur rem qui ut

                    consequatur doloribus id possimus voluptas a voluptatem

                    aut consectetur in blanditiis deserunt quia sed laboriosam

                    explicabo consectetur debitis voluptates quas quae culpa rerum non

                    maiores accusantium architecto necessitatibus reiciendis ea aut

                    eum non recusandae cupiditate animi

                    ut eum exercitationem sint

                    beatae qui ullam incidunt voluptatem non nisi aliquam

                    molestiae suscipit ratione nihil odio libero impedit vero totam

                    eum itaque quod reprehenderit et facilis dolor autem ut

                    accusamus adipisci dicta qui quo ea explicabo sed vero

                    odit eligendi recusandae doloremque cumque non

                    ea aperiam consequatur qui repellat eos

                    voluptatem nobis consequatur et assumenda magnam

                    nam quia quia nulla repellat assumenda quibusdam sit nobis
                </p>

                <Footer />

                <Link href='/' >
                    <a className="button">go back</a>
                </Link>
            </div>
        </div>
    )
}


