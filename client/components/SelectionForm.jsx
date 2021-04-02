import React from 'react';

class SelectionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
  const { handleTeamSelect } = this.props;
    return (
      <div>
        choose your team
        <button
          value="villager"
          onClick={handleTeamSelect}
        >Villager</button>
        <button
          value="werewolf"
          onClick={handleTeamSelect}
        >Werewolf</button>
      </div>
    )
  }
}

export default SelectionForm;
