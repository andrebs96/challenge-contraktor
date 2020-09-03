import { createStore } from 'redux';

const reducer = () => {
    return {
        contracts: [
            {
                id: 1,
                title: 'Contrato Social',
                startDate: '15/03/1885',
                expirationDate: '31/04/1957',
                src: '/files/launch-checklist.pdf',
                parts: [
                    {
                        id: 1,
                        name: 'Nina Mirella Lopes',
                        cpf: '199.502.865-73',
                        email: 'ninamirellalopes@gconsult.com.br',
                        phone: '(45) 2660-9227'
                    },
                    {
                        id: 2,
                        name: 'André Matheus Costa',
                        cpf: '784.727.002-16',
                        email: 'andrematheuscosta@hotmail.com',
                        phone: '(47) 2896-5543'
                    },
                    {
                        id: 3,
                        name: 'Ryan Pedro Henrique Filipe Bernardes',
                        cpf: '151.409.840-75',
                        email: 'ryanpedro@hotmail.com',
                        phone: '(68) 2891-9249'
                    }
                ]
            },
            {
                id: 2,
                title: 'Certificado de Conclusão de Curso',
                startDate: '16/10/1935',
                expirationDate: '31/09/1947',
                src: '/files/market-testing.pdf',
                parts: [
                    {
                        id: 1,
                        name: 'Nina Mirella Lopes',
                        cpf: '199.502.865-73',
                        email: 'ninamirellalopes@gconsult.com.br',
                        phone: '(45) 2660-9227'
                    },
                ]
            },
            {
                id: 3,
                title: 'Autorização para viagens de menores',
                startDate: '16/02/2005',
                expirationDate: '04/12/2019',
                src: '/files/own-publisher.pdf',
                parts: []
            },
        ],
        parts: [
            {
                id: 1,
                name: 'Nina Mirella Lopes',
                cpf: '199.502.865-73',
                email: 'ninamirellalopes@gconsult.com.br',
                phone: '(45) 2660-9227'
            },
            {
                id: 2,
                name: 'André Matheus Costa',
                cpf: '784.727.002-16',
                email: 'andrematheuscosta@hotmail.com',
                phone: '(47) 2896-5543'
            },
            {
                id: 3,
                name: 'Ryan Pedro Henrique Filipe Bernardes',
                cpf: '151.409.840-75',
                email: 'ryanpedro@hotmail.com',
                phone: '(68) 2891-9249'
            }
        ]
    }
}

const store = createStore(reducer);

export default store;