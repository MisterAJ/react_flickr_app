import React from 'react';

import Images from './Images'

const ImageContainer = (props) => {
    return (
        <div>
            <Images images={props.images}/>
        </div>
    )
}

export default ImageContainer;