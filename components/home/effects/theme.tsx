import { useState, useContext, useEffect, memo } from 'react'
import { ThemeContext } from '../../../pages/_app'


function MyTheme() {
    const [theme, handleTheme]: any = useContext(ThemeContext)

    const [checked, setChecked] = useState(false)
    const handleCheckedTheme = () => {
        setChecked(!checked)
    }
    const handleOnChangeTheme = () => {
        handleTheme()
    }
    useEffect(() => {
        if (theme === 'dark' && !checked) {
            console.log(`theme: ${theme} and checked: ${checked}`)
            setChecked(true);
        }
    }, [theme])
    return (
        <div className="content-light">
            <label className="switch">
                <input className="switch__input" type="checkbox" checked={checked} onChange={handleOnChangeTheme} />
                <span className="switch__background" onClick={handleCheckedTheme}>
                    <span className="switch__toggle"></span>
                    <span className="switch__stars"></span>
                    <span className="switch_clouds"></span>
                </span>
            </label>
        </div>
    )
}

export default memo(MyTheme)