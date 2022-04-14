import { useEffect, useState } from 'react';

function useWindowTitle(title = '') {
    const [screen, setScreen] = useState(title)
    //initalize new screen
    useEffect(() => {
        document.title = screen
    })
    //return screen and setScren
    return { screen, setScreen }
}
export { useWindowTitle }