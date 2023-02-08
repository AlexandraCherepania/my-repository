

// import { RecepsList } from "./componenets/Recepts/ReceptsList"

// export const App = () => {
//     return (RecepsList)
// };







// / Країни
// import CountryList from "./componenets/Country/CountryList"
// // import countryData from './componenets/Country/country.json'
// import countryData from "./country.json"



// export const App = () => {
//     return (<div>
//         <CountryList items={countryData} />
//     </div>)
// };







// Моя практика
// import paintGallary from "./painting.json"
// // import Gallary from './componenets/Gallary/Gallary'
// import GallaryList from './componenets/Gallary/GallaryList'
// import { TitleGallary } from './componenets/Gallary/TitleGallary'


// export const App = () => {
//     return (<div>
//         <TitleGallary title='Ексклюзивна Галерея' />
//         <GallaryList items={paintGallary} />
//     </div>);
// };






// УРОК 2/3
import { PageTitle } from './componenets/PageTitle/PageTitle';
import { EventBoard } from './componenets/EventBoard/EventBoard';
import configEvents from './events.json';
import { Conteiner } from './componenets/App/App.styled'


export const App = () => {
    return (
        <Conteiner>
            <PageTitle text="24th Core Worlds Coalition Conference" />
            <EventBoard events={configEvents} />
        </Conteiner>
    );
}










// УРОК 1

// import Painting from "./componenets/Painting";

// import PaintingList from './componenets/PaintingList';
// import Section from './componenets/Section';

// import painting from './painting.json';

// export default function App() {
//     return (
//         <div>
//             <Section title='Lets GO'>
//                 <PaintingList items={painting} />
//             </Section>
//         </div>)

// };




// {/* // return (<div>
//     //     <Painting */}
// {/* //         url={painting[0].url}
//     //         title={painting[0].title}
//     //         author={painting[0].author.tag}
//     //         profile={painting[0].author.url}
//     //         price={painting[0].price}
//     //         quantity={painting[0].quantity}
//     //     />
//     //     <Painting */}
// {/* //         url={painting[1].url}
//     //         title={painting[1].title}
//     //         author={painting[1].author.tag}
//     //         profile={painting[1].author.url}
//     //         price={painting[1].price}
//     //         quantity={painting[1].quantity}
//     //     /> */}
// {/* //     <Painting */ }
// {/* //         url={painting[2].url}
//     //         title={painting[2].title}
//     //         author={painting[2].author.tag}
//     //         profile={painting[2].author.url}
//     //         price={painting[2].price}
//     //         quantity={painting[2].quantity}
//     //     /> */}

// {/* // </div>); */ }


