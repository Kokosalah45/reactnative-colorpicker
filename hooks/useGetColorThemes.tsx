import {useCallback, useEffect, useState} from "react";

interface ColorPalette {
    paletteName : string;
    colors : {colorName : string , hexCode : string}[];
    id : string
}


export default  function useGetColorThemes(id? : string){
    const [colorThemes , setColorThemes] = useState<ColorPalette[] | ColorPalette>([])
    const fetchColorThemes = useCallback(async (id? : string) => {
        const res = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes')
        if(res.ok){
            const data = await res.json() as ColorPalette[]
            if(id !== undefined){
                const colorTheme = data.find((item) => (id === item.id)) as ColorPalette;
                if(colorTheme){
                    setColorThemes(colorTheme)
                }
                return
            }
            const mappedData =   data.map(({paletteName , id, colors}) => ({paletteName , id , colors : colors.slice(0,4) }) )
            setColorThemes(mappedData)

        }
    } , [])

    useEffect(()=> {void fetchColorThemes(id)}, [])

    return {colorThemes , setColorThemes , fetchColorThemes}
}