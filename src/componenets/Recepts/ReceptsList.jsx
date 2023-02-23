import { ReceptItem } from "./Recept"
import { List } from "./ReceptStyle"

export const RecepsList = ({ receptItem }) => {
    return (<List>
        {receptItem.map(item =>
            <ReceptItem key={item.id} data={item} />)
        }
    </List >
    )
}
