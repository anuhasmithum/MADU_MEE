import Link from 'next/link'
import { useRouter } from 'next/router'
import GlobalStyles from './style.tsx'

export default function Footer() {
    const router = useRouter()

    return (
            <div className='grid'>
                <p>
                    <Link href="/" prefetch={false}>
                        <a>Learn</a>
                    </Link>
                </p>
                <p>
                    <Link href="/" prefetch={false}>
                        <a>Showcase</a>
                    </Link>
                </p>
                <p>
                    <Link href="/" prefetch={false}>
                        <a>Blog</a>
                    </Link>
                </p>
                <p>
                    <Link href="/" prefetch={false}>
                        <a>Next.js Conf</a>
                    </Link>
                </p>
            <GlobalStyles />
        </div>
    )
}

