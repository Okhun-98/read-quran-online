import { useState } from "react"
import { language } from "../../stores/languages"
import "./DropDown.css"

export const DropDown = () => {

    const handleChange = event => {
        language.setKey('lan', event.target.value)
    }
    return (
        <select className="lan-select" onChange={handleChange}>
            <option className="lan-option" value="ru" >Русский</option>
            <option className="lan-option" value="tr" >Turkish</option>
            <option className="lan-option" value="en" >English</option>
            <option className="lan-option" value="fr" >French</option>
            <option className="lan-option" value="es" >Spanish</option>
            <option className="lan-option" value="zh" >Chinese</option>
        </select>
    )
}