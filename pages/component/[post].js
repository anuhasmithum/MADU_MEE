import {withRouter} from 'next/router'

const Post = withRouter((props) => {
    return (
        <dev>
            <h2>{props.router.query.title} </h2>
            <h3>ssssssssssssssssssssssssssssssssssssssssssssssssss</h3>
        </dev>
    )
}) 
export default Post