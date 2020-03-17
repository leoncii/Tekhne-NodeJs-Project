import React from 'react'
import { Navbar } from '../Navbar'
import { Hero } from '../Hero'
import { Div } from './style'

export const Principal = () => {
    return(
        <Div className='container'>
            <Hero />
        </Div>
    )
}