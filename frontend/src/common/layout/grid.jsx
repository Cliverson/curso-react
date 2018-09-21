import React, {Component} from 'react'

class Grid extends Component {

    toCssClasses(numbers){

        const cols = numbers ? numbers.split(' '): []
        let classes = '';

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-ld-${cols[3]}`

        return classes
    }

    render(){
        console.log(this.props.cols)
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid