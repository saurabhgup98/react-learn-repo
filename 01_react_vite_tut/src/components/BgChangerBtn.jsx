import React from 'react'

const BgChangerBtn = ({name, value, handleBtnClick}) => {
    return (
        <button style={{backgroundColor:value}} onClick={handleBtnClick}>{name}</button>
    )
}

export default BgChangerBtn