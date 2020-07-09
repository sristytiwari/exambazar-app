import React, { PureComponent } from 'react'

class Question extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                hii
            </div>
            
        )
    }
}

export default Question