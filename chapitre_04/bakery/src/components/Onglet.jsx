import React from 'react'

class Onglet extends React.Component {
  render () {
    return (
      <button
        type="button"
        className={this.props.isSelected ? 'btn btn-primary' : 'btn btn-dark'}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}
export default Onglet

