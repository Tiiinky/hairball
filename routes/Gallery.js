import React from 'react';
import ImageGallery from 'react-image-gallery';
import $ from 'jquery';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            imagelist: []
        };
        this.handleSlide = this.handleSlide.bind(this);
    }

    componentDidMount() {
        $.get('/imagelist', function (data, status) {
            var images = [];
            for (var item of data) {
                images.push({
                    original: "images/" + item,
                    thumbnail: "images" + item
                });
            }

            this.setState({
                imagelist: images
            });
        }.bind(this));
    }

    handleSlide(index){
        console.log(index);
    }
    render() {
        return (
            <div id="content">
                <Grid>
                    <h1>Gallerie</h1>
                    <Row>
                        <Col sm={12} md={12}>
                            <ImageGallery
                                items={this.state.imagelist}
                                showThumbnails={false}
                                autoPlay={true}
                                slideInterval={4000}
                                onSlide={this.handleSlide}
                            />
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}