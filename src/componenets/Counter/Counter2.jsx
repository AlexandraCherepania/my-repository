import React from 'react';
import css from  "../Counter/Counter.module.css"
import Controls from '../Counter/Controls'
import Value from './Value'



class Counter2 extends React.Component {
    //  Значення прописане,якщо воно не замовчуване
    static defaultProps = {
        initValue: 0,
    } 
    // constructor()
    // {
    //     super();

    //     this.state = {
    //         value: 0,
    //     }}

    //   Силка на число яке треба змінювати
    
    state = {
        value: this.props.initValue,
    };

    // Нове значення
    // handIncr = () => {
    //     this.setState({
    //         value: 6,
    //     })
    handIncr = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    }
        
    
    // console.log(event.target)


    handDecr = () => {
        // console.log('Зменшили!!!');
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        } 
        )    
    };

    
    
    render() {
        
            return (
                <div className={css.Counter}>
                    <Value val={this.state.value} />
                    {/* <span className={css.Counter__value}>{this.state.value}</span> */}
                    
                    <Controls
                        onIncr={this.handIncr}
                        onDecr={this.handDecr}
                    />
        
                
                </div>
            );
        
    } 
};

export default Counter2;


// export const Counter = () => {

//     return (
//         <div className='Counter'>
//             <span className='Counter__value'>0</span>
//             <div className="Counter__controls">
//                 <button type="button" >
//                     Увеличить на 1
//                 </button>
//                 <button type="button" >
//                     Уменьшить на 1
//                 </button>
//             </div>

//         </div>

//     )
// }