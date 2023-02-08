import Gallary from './Gallary';

function GallaryList({ items }) {
    return (<ul>
        {items.map(item => (
            <li key={item.id}>
                <Gallary
                    url={item.url}
                    title={item.title}
                    author={item.author.tag}
                    profile={item.author.url}
                    price={item.price}
                    quantity={item.quantity}
                />
            </li>
        ))}
    </ul>)

}

export default GallaryList; 