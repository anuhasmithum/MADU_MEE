
import Nav from './Nav'

export default function Layout(props) {
    return (
        <dev>
            <Nav></Nav>
            {props.children}
        </dev>
    )
}

