import React, {Component} from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activOptionsIdx: 3,
    }
     
    setActiveIdx = (index) => {
        this.setState({activOptionsIdx: index})
        
    }



    // стилі через додатковий Клас

    render() {
         const {label} = this.props.options[this.state.activOptionsIdx]
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Вибраний колір: {label} </p>
        <div>
                {this.props.options.map(({ label, color }, index) => {
                    const optionClasses = ['ColorPicker__option'];


                    
                    if (index === this.state.activOptionsIdx) {
                        optionClasses.push('ColorPicker__option--active');
                    }
        
                            
                    return (
                    < button
                       key={label}
                       className={optionClasses.join(' ')}
                            style={{ backgroundColor: color }}
                            onClick={() => this.setActiveIdx(index)}
                        >
                   </button>)

                })}
        </div>
    </div>
        )
    }




    // Накладання стилів через умову
    // render() {
    //     return (
    //         <div className="ColorPicker">
    //     <h2 className="ColorPicker__title">Color Picker</h2>
    //     <div>
    //         {this.props.options.map(({ label, color }, index) => (
    //     <button
    //         key={label}
    //         className='ColorPicker__option'
    //         style={{ backgroundColor: color, border: index === this.state.activOptionsIdx ? "5px solid black" : "none" }}>
    //     </button>

    // ))}
    //     </div>
    // </div>
    //     )
    // }
}

export default ColorPicker;


// const ColorPicker = ({ options }) => (
//     <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//             {options.map(({ label, color }) => (
//         <span
//             key={label}
//             className='ColorPicker__option'
//             style={{ backgroundColor: color }}>
//         </span>

//     ))}
//         </div>
//     </div>
// );

// export default ColorPicker;

