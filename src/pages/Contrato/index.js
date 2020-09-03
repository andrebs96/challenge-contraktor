import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './style.scss';
import RelatedParts from '../../components/RelatedParts';

const Contrato = ({ contracts }) => {

    const { id } = useParams()
    const contract = contracts.filter(contract => parseInt(id) === contract.id)
    const [isDisabled, setDisabled] = useState(true)
    
    return(
        <div className="container my-md">
            <div className="d-flex-sm align-center justify-between">
                <h1 className="text-center strong mb-md">Contrato</h1>
                <div className="text-center mb-md">
                    <div className="btn btn-primary" onClick={()=> setDisabled(false)}>Editar Contrato</div>
                </div>
            </div>
            <div className="d-flex-sm justify-between">
                <div className="form-box">
                    <div className="field">
                        <div className="label">
                            <label htmlFor="title">Título</label>
                        </div>
                        <input 
                            className="input" 
                            type="input" 
                            id="title" 
                            name="title" 
                            value={contract[0].title} 
                            disabled={isDisabled} 
                        />
                    </div>
                    <div className="field">
                        <div className="label">
                            <label htmlFor="">Data de Início</label>
                        </div>
                        <input 
                            className="input" 
                            type="input" 
                            id="startDate" 
                            name="startDate" 
                            value={contract[0].startDate} 
                            disabled={isDisabled} 
                        />
                    </div>
                    <div className="field">
                        <div className="label">
                            <label htmlFor="">Data de Vencimento</label>
                        </div>
                        <input 
                            className="input" 
                            type="input" 
                            id="expirationDate" 
                            name="expirationDate" 
                            value={contract[0].expirationDate} 
                            disabled={isDisabled} 
                        />
                    </div>
                    <div className="field text-center">
                        <Link to={contract[0].src} target="_blank" className="btn btn-primary">Visualizar Contrato</Link>
                    </div>
                </div>
                <RelatedParts parts={contract[0].parts} />
            </div>
        </div>
    )

}

export default connect(state => ({ contracts: state.contracts }))(Contrato);