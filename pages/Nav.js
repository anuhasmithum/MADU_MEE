import Link from 'next/link'
import { useRouter } from 'next/router'
import GlobalStyles from './style.tsx'

export default function Nav() {
    const router = useRouter()

    return (
        <div className="navbar">
            <Link href='/Home'>
                <a title='go to home page'>Home.....</a>
            </Link>
            <Link href='/Docs' >
                <a title='go to docs page'> Docs.......</a>
            </Link>
            <Link href='/About' >
                <a title='go to about page'> About.......</a>
            </Link>
            <Link href='/Contact' >
                <a title='go to contact page'> Contact.......</a>
            </Link>
            <GlobalStyles />
        </div>
    )
}

