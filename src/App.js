// Урок 2 Бардачов Стек

// import './App.css';
import   RecipeItem  from './componenets/Recepts/Recept';
import recepts from './recepts.json';

function App() {
  return (
    <div className="App">
      <RecipeItem recipeItems={recepts} />
    </div>
  );
}

export default App;
    
    
    
    
     // Урок 4 Форми
// // import React, { Component } from 'react';
// // import Form from './componenets/form';

// // class App extends Component {
// //     state= {
// //         todos: [
// //         {id: 'id-1', text: 'Понеділок', completed: true},
// //         {id: 'id-2',  text: 'Вівторок', completed: true},
// //         { id: 'id-3', text: 'Середа', completed: true},
// //         { id: 'id-4', text: 'Четвер', completed: false },
// //         { id: 'id-5', text: 'Пятниця', completed: false },
// //         ],
// //     }

// //     formSubmitHandler = (data) => {
// //         console.log(data)
// //     }
// //     render() {
// //         return (<div>

// //             <div>
// // //                 <p>Кількість елементів: {completedTotal}</p>
// // //                 <p>Кількість виконаних: {completedTodos} </p>
// // //             </div>
// // //          <TodoList
// // //                 todos={todos}
// //                 onDeleteTodo={this.deleteTodo}
// //             />

// //             <Form onSubmitEl={this.formSubmitHandler} />

// //         </div>)
// //     }
     
// // }
    
// //    export default App; 
    
    

    
    
    
    
    


    
    
    
    
    
//      // УРОК 3 Модуль  2

// // // import Counter from '../src/componenets/Counter/Counter';
// import React, {Component} from 'react';
// import Counter2 from '../src/componenets/Counter/Counter2';
// import Dropdown from './componenets/Dropdown/Dropdown'
// import ColorPicker from './componenets/ColorPicker/ColorPicker'
// import TodoList from './componenets/TodoList'
// import Form from './componenets/form'

// import TodoEditor from './componenets/TodoEditor/TodoEditor'
// import shortid from 'shortid';
// import Filter from './componenets/Filter'


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];


// // // export const App = () => {
// // //     return (<div>
// // //         <Counter2 />
// // //         <Dropdown />
// // //         <ColorPicker options={colorPickerOptions} />
// // //         <TodoList/>
// // //     </div>)
// // // };

// class App extends Component {
//     state = {
//         todos: [
//             { id: 'id-1', text: 'Понеділок', completed: true },
//             { id: 'id-2', text: 'Вівторок', completed: true },
//             { id: 'id-3', text: 'Середа', completed: true },
//             { id: 'id-4', text: 'Четвер', completed: false },
//             { id: 'id-5', text: 'Пятниця', completed: false },
//         ],
//         filter: '',
       
//     };

//     addTodo = text => {
//         console.log(text)
        
//         const todo = {
//             id: shortid.generate(),
//             text,
//             completed: false,

//         };
//          this.setState(({ todos }) => ({
//       todos: [todo, ...todos],
//     }));
       
    
//     // this.setState(prevState => ({
//         //     todos: [todo, ...prevState.todos]
//         // }))
//     }
//     deleteTodo = (todoId) => {
//         this.setState(prevState => ({
//             todos: prevState.todos.filter(todo => todo.id !== todoId),
//         }))
//     };

//     toggleCompleted = todoId => {
//         console.log(todoId)
        
//         this.setState(({ todos }) => ({
//       todos: todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
//       ),
//         }));
        


//         // this.setState(prevState => ({
//         //     todos: prevState.todos.map(todo => {
//         //         if (todo.id === todoId) {
//         //             return {
//         //                 ...todo,
//         //                 completed: !todo.completed
//         //             };
//         //         }

//         //         return todo;
//         //     })
//         // }))
//     }

//     changeFilter = e => {
//         this.setState({ filter: e.currentTarget.value })
//         console.log(e.currentTarget.value)
//     }
    
//     // handlChange = event => {
//     //     const { name, value } = event.currentTarget;

//     //     // Обновити стейт!!
//     //     this.setState({
//     //         [name]: value,
//     //     })
        
        
        
//     // console.log(event.currentTarget)
//     // console.log(event.currentTarget.name)
//     // console.log(event.currentTarget.name.value)
    
//     // this.state({name: event.currentTarget.value });
    
//     // handlTagChange = event => {
//     //     this.state({tag: event.currentTarget.value });
//     // };

//     render() {

//         const { todos, filter} = this.state;
        
//         // const completedTodos = todos.filter(todo => todo.completed);
        
//         const completedTotal = todos.length;
//         const completedTodos = todos.reduce(
//             (acc, todo) => (todo.completed ? acc + 1 : acc),
//             0,
//         );
        

//         const normalizeFilter = this.state.filter.toLowerCase();
        
//         const visibleTodos = this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizeFilter))


        
//         return (<div>

//             {/* <Form />
//             <Counter2 />
//             <Dropdown />
//             <ColorPicker options={colorPickerOptions} /> */}
//             <TodoEditor onSubmit={this.addTodo} />
// {/*             
//             <label>
//                 Фільтер по назві: <input type='text'
//                     value={filter}
//                     onChange={ this.changeFilter} />
//             </label>
//              */}
            
//             <Filter
//                 value={filter}
//                 onChange={this.changeFilter} />
            
//             <div>
//                 <p>Кількість елементів: {completedTotal}</p>
//                 <p>Кількість виконаних: {completedTodos} </p>
//             </div>
//             <TodoList
//                 todos={visibleTodos}
//                 onDeleteTodo={this.deleteTodo}
//                 onToggleCompleted={this.toggleCompleted}
//             />
//         </div>)
//     }

// }
// export default App;
















// // // import { RecepsList } from "./componenets/Recepts/ReceptsList"

// // // export const App = () => {
// // //     return (RecepsList)
// // // };







// // // / Країни
// // // import CountryList from "./componenets/Country/CountryList"
// // // // import countryData from './componenets/Country/country.json'
// // // import countryData from "./country.json"



// // // export const App = () => {
// // //     return (<div>
// // //         <CountryList items={countryData} />
// // //     </div>)
// // // };







// // // Моя практика
// // // import paintGallary from "./painting.json"
// // // // import Gallary from './componenets/Gallary/Gallary'
// // // import GallaryList from './componenets/Gallary/GallaryList'
// // // import { TitleGallary } from './componenets/Gallary/TitleGallary'


// // // export const App = () => {
// // //     return (<div>
// // //         <TitleGallary title='Ексклюзивна Галерея' />
// // //         <GallaryList items={paintGallary} />
// // //     </div>);
// // // };






// // // // УРОК 2/3
// // // import { PageTitle } from './componenets/PageTitle/PageTitle';
// // // import { EventBoard } from './componenets/EventBoard/EventBoard';
// // // import configEvents from './events.json';
// // // import { Conteiner } from './componenets/App/App.styled'


// // // export const App = () => {
// // //     return (
// // //         <Conteiner>
// // //             <PageTitle text="24th Core Worlds Coalition Conference" />
// // //             <EventBoard events={configEvents} />
// // //         </Conteiner>
// // //     );
// // // }










// // // УРОК 1

// // // import Painting from "./componenets/Painting";

// // // import PaintingList from './componenets/PaintingList';
// // // import Section from './componenets/Section';

// // // import painting from './painting.json';

// // // export default function App() {
// // //     return (
// // //         <div>
// // //             <Section title='Lets GO'>
// // //                 <PaintingList items={painting} />
// // //             </Section>
// // //         </div>)

// // // };




// // // {/* // return (<div>
// // //     //     <Painting */}
// // // {/* //         url={painting[0].url}
// // //     //         title={painting[0].title}
// // //     //         author={painting[0].author.tag}
// // //     //         profile={painting[0].author.url}
// // //     //         price={painting[0].price}
// // //     //         quantity={painting[0].quantity}
// // //     //     />
// // //     //     <Painting */}
// // // {/* //         url={painting[1].url}
// // //     //         title={painting[1].title}
// // //     //         author={painting[1].author.tag}
// // //     //         profile={painting[1].author.url}
// // //     //         price={painting[1].price}
// // //     //         quantity={painting[1].quantity}
// // //     //     /> */}
// // // {/* //     <Painting */ }
// // // {/* //         url={painting[2].url}
// // //     //         title={painting[2].title}
// // //     //         author={painting[2].author.tag}
// // //     //         profile={painting[2].author.url}
// // //     //         price={painting[2].price}
// // //     //         quantity={painting[2].quantity}
// // //     //     /> */}

// // // {/* // </div>); */ }


