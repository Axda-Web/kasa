import React, { createContext, useState } from 'react'

export const HousingContext = createContext('')

const HousingArea = ({children}) => {

    const [housing, setHousing] = useState([])

  return (
    <HousingContext.Provider value={{ housing, setHousing }}>
        {children}
    </HousingContext.Provider>
  )
}

export default HousingArea