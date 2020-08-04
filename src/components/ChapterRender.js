import React from 'react'

const ChapterRender = ({chapters}) =>
    <div className="chapters-list">
        <ol className="chapters" >
            {DisplayChapters(chapters)}
        </ol>
    </div>

const DisplayChapters = (chapters) => {
    return chapters.map((chapter, i) => {
            return (
                <li className="chapter" key={i} value={chapter}> 
                    {chapter.title}
                </li>
            )
        })
}

export default ChapterRender
