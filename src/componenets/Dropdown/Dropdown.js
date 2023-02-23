
import React from "react";
import { Component } from "react";
import './Dropdown.css'

// Метод показати/сховати

// class Dropdown extends Component {
//     state = {
//         visible: false,
//     };

//     show = () => {
//         this.setState({ visible: true})
//     }

//     hide = () => {
//         this.setState({visible: false})
//     }
    
        
        
//         render() {

//         return (
//       <div className="Dropdown">
//         <button
//           type="button" className="Dropdown__toggle" onClick={this.show}> Показувати
//                 </button>
//          <button
//           type="button" className="Dropdown__toggle" onClick={this.hide}> Сховати
//                 </button>
//             {this.state.visible && <div className="Dropdown__menu">Выпадающее меню</div>}
        
               
//       </div>
//     );

        
//     }
// }

// export default Dropdown;

class Dropdown extends Component {
    state = {
        visible: false,
    };  

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    }
         
    
    render() {
        return (
      <div className="Dropdown">
        
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.toggle}
                >
                    {this.state.visible ? 'Сховати' : "Показати" }</button>
       
            {this.state.visible && (<div className="Dropdown__menu">Выпадающее меню</div>)}
        
               
      </div> )
    }
}

export default Dropdown;

