import React from "react"
import './content.scss'
function TopBlock({searchTitle,search}) {
    return(
        <div className="container">
            <div className="top-block__row">
                <h1 className="top-block__title">{search ? `Поиск:${search}` : "Все крассовки"}</h1>
                <form  className="top-block__search">
                    <button className="top-block__icon"></button>
                    <input type="search" className="top-block__inp" 
                    placeholder="Поиск..."
                    onChange={searchTitle}
                    value={search}
                    />
                </form>
            </div>
        </div>

    )
}
export default TopBlock;