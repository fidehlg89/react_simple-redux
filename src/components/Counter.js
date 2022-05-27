import { connect } from "react-redux";
import { decrement, increment } from "../redux/actions/";

const Counter = ({ count, incrementCount, decrementCount }) => {
  return (
    <div>
      Counter
      <br />
      <button onClick={incrementCount} className="btn btn-primary">

        +
      </button>
      <button onClick={decrementCount} className="btn btn-secondary">
          -
        </button>
      <h2>{count}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(increment()),
  decrementCount: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
