"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
};

const ProductCard = props => {
  const [state, setState] = _react.default.useState({
    pos: [0, 0],
    active: false
  });

  let rootRef;
  let overlayRef;

  const handleMouseEnter = e => {
    setState({
      pos: [e.pageX - rootRef.offsetLeft, e.pageY - rootRef.offsetTop],
      active: true
    });
  };

  const handleBack = e => {
    setState({
      pos: [e.pageX - rootRef.offsetLeft, e.pageY - rootRef.offsetTop],
      active: false
    });
  };

  _react.default.useEffect(() => {
    if (state.active) {
      overlayRef.style.transition = "none";
      overlayRef.style.clipPath = `circle(0% at ${state.pos[0]}px ${state.pos[1]}px )`;
      overlayRef.style.transition = '0.6s all';
      overlayRef.style.clipPath = `circle(150% at ${state.pos[0]}px ${state.pos[1]}px )`;
    } else {
      overlayRef.style.clipPath = `circle(0% at ${state.pos[0]}px ${state.pos[1]}px )`;
    }
  }, [state]);

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: r => rootRef = r,
    className: props.className,
    style: props.style ? { ...styles.root,
      ...props.style
    } : styles.root,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleBack
  }, props.children, /*#__PURE__*/_react.default.createElement("div", {
    ref: r => overlayRef = r,
    style: styles.overlay
  }, props.overlay));
};

var _default = ProductCard;
exports.default = _default;