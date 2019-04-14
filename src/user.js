import React from 'react'

const user = (props)=> {
    return (
        <div>
            {/* { props.history.push('/')} */}
            user - {props.match.params.username}
        </div>
    )

}

export default user