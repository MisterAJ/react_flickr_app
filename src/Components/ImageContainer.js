import React from 'react';

import Images from './Images'

const ImageContainer = (props) => {
    console.log(props)
    return (
        <div>
            <Images images={props.images}/>
        </div>
    )
}

export default ImageContainer;