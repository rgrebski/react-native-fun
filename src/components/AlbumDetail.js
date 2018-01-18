import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Card} from "./Card";

export class AlbumDetail extends React.Component {

    render() {
        return (
            <Card>
                <Text>{this.props.album.title}</Text>
            </Card>
        )
    }
}

AlbumDetail.propTypes = {
    album: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
};