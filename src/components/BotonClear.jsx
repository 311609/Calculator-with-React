
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (_props) => (
    <div className='boton-clear'
    onClick={_props.manejarClear}>
        Clear
    </div>
);

export default BotonClear;