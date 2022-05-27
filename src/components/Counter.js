import { connect } from "react-redux";
import { decrement, increment } from "../redux/actions/";

const Counter = ({ count, incrementCount, decrementCount }) => {
  return (
    <div>
      Counter
      <br />
      <button
        onClick={incrementCount}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        +
      </button>
      <span style={{ padding: "10px" }}>{count}</span>
      <button
        onClick={decrementCount}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        -
      </button>
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
