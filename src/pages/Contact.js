import React from 'react'

export const Contact = () => {
    return (
        
    <div className="container">
      <div className="container-contact-us">
        <div className="titulo">
            <h1>Contactanos</h1>
            <h3>Tienes alguna pregunta no dudes en preguntar con gusto te responderemos lo antes posible</h3>
        </div> 
          <div className="formulario">
            <div>
                <h6>Name</h6>
                <input type="text" placeholder="User" />
            </div>
            <div>
                <h6>Email Addres</h6>
                <input type="text" placeholder="@email"/>
            </div>
            <div>
                <h6>Message</h6>
                <textarea  placeholder="Write something.."></textarea>
            </div>
        </div>
        <div className="miboton">
            <button>Enviar Mensage</button>
        </div>
    </div>
    </div>
    )
}

