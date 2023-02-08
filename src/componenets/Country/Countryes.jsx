import PropTypes from 'prop-types';
import css from '../Country/Country.module.css'


export default function Countryes({ name, capital, flag, currenciesCode, currenciesName, currenciesSymbol }) {
    return (<div className={css.eventBoard}>
        <img src={flag} alt={name} width="120" />
        <h1 className={css.title}>{name}</h1>
        <p className={css.info}>
            Capital: {capital}
        </p>
        <p className={css.info}> Money: '{`${currenciesCode}, ${currenciesName} = ${currenciesSymbol}`}'</p>

        <button type="button">Більше...</button>
    </div>)
}



PropTypes.Countryes = {
    name: PropTypes.string,
    capital: PropTypes.string,
    flag: PropTypes.string,
    currenciesCode: PropTypes.string,
    currenciesName: PropTypes.string,
    currenciesSymbol: PropTypes.string,
}



// capital, flag, currenciesCode, currenciesName, currenciesSymbol