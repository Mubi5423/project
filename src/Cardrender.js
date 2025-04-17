import React from 'react'
import Card from './Card'
import img1 from './img1.jpg'

export const Cardrender = () => {
    return(
        <div className='row'>
            <div className='col-md-4'>
                <Card
                    title="city of lights"
                    image={img1}
                    description="A stunning view of beautiful nature"
                />

            </div>
            <div className='col-md-4'>
                <Card
                    title="The Hunters"
                    image="https://picsum.photos/200/300"
                    description="This is hunter description"
                />

            </div>
        </div>
    )
}