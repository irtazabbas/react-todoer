import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './title/title';
import Description from './description/description';
import { DoableModel } from '../../../../models-ref';

class Head extends Component {
  state = {
    editingTitle: false,
    editingDescription: false
  };

  toggleEditingTitle = () => {
    this.setState({ editingTitle: !this.state.editingTitle });
  }

  updateTitle = title => {
    this.props.updateTitle(this.props.doableId, title);
  }

  render() {
    return (
      <header>
        <Title
          editing={ this.state.editingTitle }
          toggleEditing={ this.toggleEditingTitle }
          title={ this.props.title }
          updateTitle={ this.updateTitle }
        />
        <Description
          editing={ this.state.editingDescription }
          description={ this.props.description }
        />
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateTitle: (doableId, title) => DoableModel.updateTitle(
    dispatch, doableId, title
  )
});

export default connect(null, mapDispatchToProps)(Head);
