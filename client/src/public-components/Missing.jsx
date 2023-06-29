import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <article className='center'>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div>
                <Link to='/'>Homepage</Link>
            </div>
        </article>
    )
}

export default Missing;