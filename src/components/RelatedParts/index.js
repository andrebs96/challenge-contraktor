import React, { useState } from 'react';
import './style.scss';

const RelatedParts = props => {

    const { parts } = props
    const [createPart, setCreatePart] = useState(false)
    
    return(
        <div className="related-parts">
            <div className="label">Adicionar partes:</div>
            <div className="related-parts-box">
                {createPart &&
                    <div className="card mb-xs">
                        <div className="mb-xxxs">
                            <label htmlFor="">Nome: </label>
                            <input type="text" name="" id="" className="" />
                        </div>
                        <div className="mb-xxxs">
                            <label htmlFor="">CPF: </label>
                            <input type="text" name="" id="" className="" />
                        </div>
                        <div className="mb-xxxs">
                            <label htmlFor="">E-mail: </label>
                            <input type="text" name="" id="" className="" />
                        </div>
                        <div className="mb-xxs">
                            <label htmlFor="">Telefone: </label>
                            <input type="text" name="" id="" className="" />
                        </div>
                        <div className="text-right mb-xxxs">
                            <div className="badge">Adicionar parte</div>
                        </div>
                    </div>
                }
                {parts && parts.length > 0
                    ? parts.map((part, index) => {
                        
                        return (
                            <div key={index} className="card mb-xs">
                                <div className="mb-xxxs">
                                    <input className="mr-xs" type="checkbox" id="" name="" />
                                    <span className="bold text-uppercase">{part.name}</span>
                                </div>
                                <div className="ml-xxxs mb-xxxs">
                                    <span className="bold text-uppercase mr-xs">CPF:</span>
                                    {part.cpf}
                                </div>
                                <div className="ml-xxxs mb-xxxs">
                                    <span className="bold text-uppercase mr-xs">E-mail:</span>
                                    {part.email}
                                </div>
                                <div className="ml-xxxs mb-xxxs">
                                    <span className="bold text-uppercase mr-xs">Telefone:</span>
                                    {part.phone}
                                </div>
                            </div>
                        )

                    })
                    : <div className="card mb-xs">
                        <div className="mb-xxxs">
                            <span className="bold text-uppercase">Não há partes para assinar o contrato</span>
                        </div>
                    </div>
                }
            </div>
            <div className="text-center mb-md">
                <div className="btn btn-primary" onClick={()=> setCreatePart(true)}>Criar nova parte</div>
            </div>
        </div>
    )

}

export default RelatedParts;