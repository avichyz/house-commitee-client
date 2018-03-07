import React, { Component } from 'react';
import { fromJS } from 'immutable';
import Forum from './forum/Forum';


const messages = [
    {
        writerName: "ועד הבית",
        header: "הודעה של הלייף",
        content: 'אין הודעות כאלו, משהו סאמטינג'
    },
    {
        writerName: "ועד הבית",
        header: "הודעה של הלייף",
        content: 'אין הודעות כאלו, משהו סאמטינג'
    },
    {
        writerName: "ועד הבית",
        header: "הודעה של הלייף",
        content: 'אין הודעות כאלו, משהו סאמטינג'
    },
    {
        writerName: "ועד הבית",
        header: "הודעה של הלייף",
        content: 'אין הודעות כאלו, משהו סאמטינג'
    },

]


class ForumContainer extends Component {
    render() {
        return (
            <Forum messages={fromJS(messages)}/>
        )
    }
}

export default ForumContainer;
