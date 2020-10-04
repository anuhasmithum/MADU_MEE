import Link from 'next/link'
import { useRouter } from 'next/router'
import GlobalStyles from './style.tsx'

export default function Nav() {
    const router = useRouter()

    return (
        <div className="navbar">
            <Link href='/Home'>
                <a>Home.....</a>
            </Link>
            <Link href='/Docs' >
                <a> Docs.......</a>
            </Link>
            <Link href='/About' >
                <a> About.......</a>
            </Link>
            <Link href='/Contact' >
                <a> Contact.......</a>
            </Link>
            <GlobalStyles />
        </div>
    )
}
