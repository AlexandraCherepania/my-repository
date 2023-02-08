import PropTypes from 'prop-types';

export default function Gallary({ url, title, author, profile, price, quantity }) {
    return (
        <div>
            <img src={url} alt={title} width="480" />
            <h2>{title}</h2>
            <p>
                Автор: <a href={profile}>{author}</a>
            </p>
            <p>Цена: {price}  кредитов</p>
            <p>Доступность: {quantity < 10 ? 'Закінчується' : "Є в наявності"} </p>
            <button type="button">Добавить в корзину</button>
        </div>
    )

}

PropTypes.Gallary = {
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    profile: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
}