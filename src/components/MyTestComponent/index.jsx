import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import Actions from '../../store/actions/actions'


class MyTestComponent extends React.Component {

  render() {
    let props =  this.props;
    return (
      <div>
        <button onClick={ () => store.dispatch( { type : Actions.INCREMENT_ASYNC } ) }>Добавить</button>
        <p>{ props.number }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ number: state.number });

export default connect(mapStateToProps)(MyTestComponent)
