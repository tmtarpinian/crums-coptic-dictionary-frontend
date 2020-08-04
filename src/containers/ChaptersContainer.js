import React, { Component } from 'react'
import ChapterRender from '../components/ChapterRender';

const URL = 'http://localhost:3000/chapters'

class ChaptersContainer extends Component {
    state = {
        chapters: []
    }
    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(chaptersData => {
            this.setState({
                chapters: chaptersData
            })
        })
    }
    render() {
        return (
            <div>
                <ChapterRender chapters={this.state.chapters} />
            </div>
        )
    }
}


export default ChaptersContainer