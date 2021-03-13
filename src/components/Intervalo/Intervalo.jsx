import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "../Card/Card";
import {
  alteraNumeroMaximo,
  alteraNumeroMinimo,
} from "../../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToPro(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      //action creator -> action
      const action = alteraNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      //action creator -> action
      const action = alteraNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToPro)(Intervalo);
