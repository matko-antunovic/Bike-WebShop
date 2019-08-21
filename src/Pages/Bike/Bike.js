import React from 'react'

const Bike = ({match}) => {
    console.log(match.params.name)
    return (
        <div>
            AHAHA OVO JE BIKE MAJMUNE {match.params.name}
        </div>
    )
}

export default Bike
