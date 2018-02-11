import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Image } from 'semantic-ui-react'

const propTypes = {
    selectedImageSrc: PropTypes.string
}
class Gallery extends Component {
    render() {
        const { selectedImageSrc } = this.props;
        return (
            <Segment>
                <Image src={selectedImageSrc} 
                    centered size='huge'/>
            </Segment>
        )
    }
}

Gallery.propTypes = propTypes;
export default Gallery;
