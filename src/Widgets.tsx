import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newArticle = (heading: string, subtitle: string) => (
        <div className="widgets_article">
            <div className="widgets_article_left">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newArticle('React', 'Best Frontend App')}
            {newArticle('Node', 'Best Backend App')}
            {newArticle('JS', 'Best Language')}
            {newArticle('Typescript', 'Javascript Superset')}
            {newArticle('Learn ', 'always')}
        </div>
    )
}

export default Widgets
