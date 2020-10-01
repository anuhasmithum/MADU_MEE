import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Nav() {
        const router = useRouter()

    return (
        <dev>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link href='/'><a className="navbar-brand">GetStart...</a></Link>
                        {/* <span onclick={() => router.replace('/')}><a className="navbar-brand">GetStart...</a></span> */}

                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link href='/Docs' >
                            <a style={{ marginRight: 50 }}>Docs.......</a>
                        </Link></li>
                        <li><Link href='/About' >
                            <a style={{ marginRight: 50 }}>About.......</a>
                        </Link></li>
                        <li><Link href='/Contact' >
                            <a style={{ marginRight: 50 }}>contact.......</a>
                        </Link></li>
                    </ul>
                </div>
            </nav>
        </dev>
    )
}
