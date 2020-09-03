import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

const Contratos = ({ contracts }) => {
    
    return(
        <div className="container my-md">
            <div className="d-flex-sm align-center justify-between">
                <h1 className="text-center strong mb-md">Lista de Contratos</h1>
                <div className="text-center mb-md">
                    <Link to="/criar" className="btn btn-primary">Adicionar</Link>
                </div>
            </div>
            <div className="table-box">
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th className="small-title strong p-xs">Nº Contrato</th>
                            <th className="small-title strong p-xs">Título</th>
                            <th className="small-title strong p-xs">Data de Início</th>
                            <th className="small-title strong p-xs">Data de Vencimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                        
                            contracts.map((contract, index) => {
                                
                                return (
                                    <tr key={index}>
                                        <td className="text-center p-xs">{contract.id}</td>
                                        <td className="text-center p-xs">{contract.title}</td>
                                        <td className="text-center p-xs">{contract.startDate}</td>
                                        <td className="text-center p-xs">{contract.expirationDate}</td>
                                        <td className="text-center p-xs">
                                            <div>
                                                <Link to={`/contrato/${contract.id}`} className="btn btn-primary">Visualizar</Link>
                                            </div>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default connect(state => ({ contracts: state.contracts }))(Contratos);