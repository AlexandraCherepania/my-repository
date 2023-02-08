import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { App } from './App';
import './index.css';
import { theme } from './../src/Constants/theme'


// import 'normalize.css';
// import paintings from '../src/painting.json';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>, document.querySelector('#root'));





// /////////////////////////////////////////////

// Компоненти
// function Painting(props) {
//   const { url, title, author, profile, price } = props;

//   return (<div>
//     <img src={url} alt={title} width="480" />
//     <h2>{title}</h2>
//     <p>
//       Автор: <a href={author}>{profile}</a>
//     </p>
//     <p>Цена: {price}кредитов</p>
//     <p>Доступность: </p>
//     <button type="button">Добавить в корзину</button>
//   </div>)

// }
// const painting = paintings[0];

// ReactDOM.render(<Painting
//   url={painting.url}
//   title={painting.title}
//   author={painting.author.url}
//   profile={painting.author.tag}
//   price={painting.price}
// />, document.querySelector('#root'));






// *******************************************************************

// const el1 = React.createElement('span', { children: 'Hello' });
// const el2 = React.createElement('span', { children: 'world' });

// const el = React.createElement('div', {
//   children: 'Hello world',
// }); 


// const el = React.createElement('div', { children: [el1, el2] });

// console.log(el);

// ReactDOM.render(el, document.querySelector('#root'));

// JSX element ***********************************

// const el1 = <span>Hello</span>
// const el2 = <span>World</span>

// const jsxEl = <div>
//   {el1}
//   {el2}
// </div>

// console.log(jsxEl);

// *******************************************************
// const data = paintings[2];

// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// }

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price}кредитов</p>
//     <p>Доступность: </p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// )

// ReactDOM.render(painting, document.querySelector('#root'))

// //////////////////////////////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

