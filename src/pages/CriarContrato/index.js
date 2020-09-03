import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import RelatedParts from '../../components/RelatedParts';

const CriarContrato = ({ parts }) => {
    
    return(
        <div className="container my-md">
            <div className="d-flex-sm align-center justify-between">
                <h1 className="text-center strong mb-md">Criar Contrato</h1>
                <div className="text-center mb-md">
                    <div className="btn btn-primary">Salvar Contrato</div>
                </div>
            </div>
            <div className="d-flex-sm justify-between">
                <div className="form-box">
                    <div className="field">
                        <div className="label">
                            <label htmlFor="">Título</label>
                        </div>
                        <input className="input" type="input" id="" name="" />
                    </div>
                    <div className="field">
                        <div className="label">
                            <label htmlFor="">Data de Início</label>
                        </div>
                        <input className="input" type="date" id="" name="" />
                    </div>
                    <div className="field">
                        <div className="label">
                            <label htmlFor="">Data de Vencimento</label>
                        </div>
                        <input className="input" type="date" id="" name="" />
                    </div>
                    <div className="field">
                        <div className="label">
                            <label htmlFor="">Anexar contrato <span className="small">(PDF ou DOC)</span></label>
                        </div>
                        <input type="file" name="" id="" className="input" />
                    </div>
                    <div className="field text-center">
                        <Link to="/adicionar-contrato" className="btn btn-primary">Criar nova parte</Link>
                    </div>
                </div>
                <RelatedParts parts={parts} />
            </div>
        </div>
    )

}

export default connect(state => ({ parts: state.parts }))(CriarContrato);