import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from './Gallery';

class GalleryContainer extends Component {
    render() {
        return (
            <Gallery
                selectedImageSrc='http://www.arvelodesigns.com/media/img/amazing-of-contemporary-modern-furniture-modest-modern-furnitures-on-furniture-contemporary-modern-sofa-402.jpg'/>
        )
    }
}

export default GalleryContainer;
