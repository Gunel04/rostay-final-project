import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const StaticLanguage = ({ az, en }) => {
    const [language] = useContext(LanguageContext);
     
    return (
        <>
            {language === "AZ" ? az : en}

        </>
    )
}

export default StaticLanguage
