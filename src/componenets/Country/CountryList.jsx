
import Countryes from "./Countryes"
import css from '../Country/Country.module.css'



export default function CountryList({ items }) {
    console.log(items)
    return (<ul className={css.eventBoardLi}>
        {items.map(item => (
            <li className={css.style } key={item.name}>
                <Countryes
                    name={item.name}
                    capital={item.capital}
                    flag={item.flags.svg}
                    currenciesCode={item.currencies.code}
                    currenciesName={item.currencies.name}
                    currenciesSymbol={item.currencies.symbol}

                />
            </li>
        ))}
    </ul>)
}


