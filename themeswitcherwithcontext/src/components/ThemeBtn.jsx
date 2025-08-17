import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="form-check form-switch d-flex align-items-center">
            <input
                type="checkbox"
                className="form-check-input"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <span className="ms-2 text-sm font-medium text-dark">Toggle Theme</span>
        </label>
    );
}