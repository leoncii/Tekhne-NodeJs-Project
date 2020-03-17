import React from 'react'
import { Section} from './style'

export const Hero = () => {
    return (
        <Section className="hero">
            <h1>Aqui va a haber<br /> <span>algo cool</span></h1>
            <div className="button">
                <a className="btn1" href="">Empezar</a>
                <a className="btn2" href="">Destacado</a>
            </div>
        </Section>
    )
}