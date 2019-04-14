import React, { PureComponent } from 'react';
class Life extends PureComponent {
    state = {
        title:'Life cycles'
    }
    render(){
        console.log('RENDER')
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState({
                        title:'something else'
                    })}
                >CLICK TO CHANGE</div>

            </div>
        )
    }
}

export default Life;