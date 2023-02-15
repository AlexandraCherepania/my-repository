// (
//     <div className="Counter__controls">
//         <button type="button" onClick={onIncrement}>
//             Увеличить на 1
//         </button>
//         <button type="button" onClick={onDecrement}>
//             Уменьшить на 1
//         </button>
//     </div>
// )

import React from 'react';
import css from "../Counter/Counter.module.css"
import  Controls  from './Controls'


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

// onClick = { onDecrement }
// onClick = { onIncrement }


// Переписати на клас


class Counter extends React.Component  {
    
    static defaultProps = {
        initValue: 0,
    }


    state = {
        value: this.props.initValue,
    };

    
    handIncr = () => {
        this.setState(prevStat => {
            return {
                value: prevStat.value + 1,
            }
        
        })
        // console.log('Клік збільшити')
        // console.log(event.target)
    }
    
    handDecr = () => {
        // console.log('Клік зменшити')
        this.setState(prevStat => {
            return {
                value: prevStat.value - 1,
            }

        })
    }

    render() {
        return (
            <div className={css.Counter}>
            
                <span className={css.Counter__value}>{this.state.value}</span>
            
                
                <Controls onIncr={this.handIncr} 
                onDecr={this.handDecr} />
                
                
                {/* <div className={css.Counter__controls}>
                
                    <button type="button"  onClick={this.handIncr}>Збільшити на 1
                   </button>
               
                    <button type="button" onClick={this.handDecr} >Зменшити на 1
                    </button>
           
                </div> */}
        
            </div>
        )
    }

}
export default Counter;

























// РОЗМІТКА

// {/* <div className='Counter'>
//     <span className='Counter__value'>0</span>
//     <div className="Counter__controls">
//         <button type="button" >
//             Увеличить на 1
//         </button>
//         <button type="button" >
//             Уменьшить на 1
//         </button>
//     </div>
        
// </div> */}

