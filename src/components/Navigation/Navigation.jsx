export default function Navigation({ links }) {
    return (
        <ul className='navbar-nav ms-auto'>
            {links.map((link, index) => (
                <li key={index} className='nav-link'>{link}</li>
            ))}
        </ul>
    );
}