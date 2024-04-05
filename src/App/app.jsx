import React from 'react'
import './app.scss'
import data from '../../data.json'

const ResultSummary = () => {
  return (
    <div className="resumo-do-resultado">
      <div className="cartao-esquerdo">
        <div className="pontuacao">{data.pontuacao}</div>
        <div className="excelente">Excelente</div>
        <div className="barra-de-progresso"></div>
        <div className="porcentagem">{data.porcentagem}</div>
      </div>
      <div className="cartao-de-resumo">
        {data.categoria.map((cat, index) => (
          <div key={index} className="categoria">
            <span>{cat.nome}</span>
            <span>{cat.pontuacao}</span>
          </div>
        ))}
      </div>
      <button className="botao-continuar">Continuar</button>
    </div>
  )
}

export default ResultSummary
