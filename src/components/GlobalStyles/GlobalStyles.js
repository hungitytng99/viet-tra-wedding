import PropTypes from 'prop-types';
import './GlobalStyles.sass';
import './_mixin.sass';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
