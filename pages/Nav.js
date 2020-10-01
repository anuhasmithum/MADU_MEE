import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Nav() {
        const router = useRouter()

    return (
        <dev className='nav'>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header getstart">
                        <Link href='/Home'><a className="navbar-brand">GetStart...</a></Link>
                        {/* <span onclick={() => router.replace('/')}><a className="navbar-brand">GetStart...</a></span> */}

                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link href='/Docs' >
                            <a style={{ marginRight: 50 }}> Docs.......</a>
                        </Link></li>
                        <li><Link href='/About' >
                            <a style={{ marginRight: 50 }}> About.......</a>
                        </Link></li>
                        <li><Link href='/Contact' >
                            <a style={{ marginRight: 50 }}> Contact.......</a>
                        </Link></li>
                    </ul>
                </div>
            </nav>
            <div>

            </div>
            <style jsx>{`
                .nav {
                    width: auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    margin: 10px 100px;
                    // background-color: red;
                }
                .getstart {
                    justify-content: space-around;
                    margin: 10px 50px;
                }
            `}
            </style>
        </dev>
    )
}
