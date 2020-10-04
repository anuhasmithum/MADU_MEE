import Link from 'next/link'
import Footer from './footer'
import Head from 'next/head'
import GlobalStyles from './style.tsx'
import Layout from './Layout'


export default function ContactPage() {
    return (
        // <html>
        <div className="container">
            <Head>
                <title>Style</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <div className='body'>
                <Layout />
                <h2>Contact Us..</h2>
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

                    voluptatem libero consectetur rerum ut

                    eius omnis est qui voluptatem autem

                    rerum culpa quis harum

                    nulla aliquid eveniet harum laborum libero alias ut unde

                    qui ea incidunt quis

                    qui molestiae voluptatibus velit iure harum quisquam

                    et labore eos enim rerum consequatur sunt

                    molestiae doloribus et laborum quod ea

                    facere ipsa nam eum voluptates reiciendis vero qui

                    asperiores illo tempora fuga sed ut quasi adipisci

                    qui sit non

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

                    esse quas et quo quasi exercitationem

                    animi voluptas quod perferendis est

                    eos amet tempore laudantium fugit a

                    accusamus adipisci dicta qui quo ea explicabo sed vero

                    odit eligendi recusandae doloremque cumque non

                    ea aperiam consequatur qui repellat eos

                    rerum non ex sapiente

                    voluptatem nobis consequatur et assumenda magnam

                    nam quia quia nulla repellat assumenda quibusdam sit nobis

                    dolorem veniam quisquam deserunt repellendus

                    debitis vitae delectus et harum accusamus aut deleniti a

                    debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis

                    et praesentium aliquam est

                    ex hic consequuntur earum omnis alias ut occaecati culpa

                    omnis laboriosam molestias animi sunt dolore

                    natus corrupti maxime laudantium et voluptatem laboriosam odit

                    reprehenderit quos aut aut consequatur est sed

                    fugiat perferendis sed aut quidem

                    quos quo possimus suscipit minima ut

                    et quis minus quo a asperiores molestiae

                    recusandae quia qui sunt libero

                    ea odio perferendis officiis

                    quisquam aliquam quia doloribus aut

                    fugiat aut voluptatibus corrupti deleniti velit iste odio

                    et provident amet rerum consectetur et voluptatum

                    harum ad aperiam quis

                    similique aut quo

                    laudantium eius officia perferendis provident perspiciatis asperiores

                    magni soluta corrupti ut maiores rem quidem

                    et placeat temporibus voluptas est tempora quos quibusdam

                    nesciunt itaque commodi tempore

                    omnis consequuntur cupiditate impedit itaque ipsam quo

                    debitis nisi et dolorem repellat et

                    ut cupiditate sequi aliquam fuga maiores

                    inventore saepe cumque et aut illum enim

                    omnis nulla eum aliquam distinctio

                    molestias modi perferendis perspiciatis

                    voluptates dignissimos sed doloribus animi quaerat aut

                    explicabo odio est et

                    consequuntur animi possimus

                    vel non beatae est

                    culpa eius et voluptatem et

                    accusamus sint iusto et voluptatem exercitationem

                    temporibus atque distinctio omnis eius impedit tempore molestias pariatur

                    ut quas possimus exercitationem sint voluptates

                    rerum debitis voluptatem qui eveniet tempora distinctio a

                    sed ut vero sit molestiae

                    rerum ex veniam mollitia voluptatibus pariatur

                    consequuntur aut ut fugit similique

                    dignissimos quo nobis earum saepe

                </p>
                <GlobalStyles />
                <Footer />
            </div>
        </div>
        // </html>
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