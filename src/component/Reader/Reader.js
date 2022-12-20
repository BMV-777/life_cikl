import { Controls } from 'component/Controls/Controls';
import { Progress } from 'component/Progress/Progress';
import { Texture } from 'component/Text/Text';
import { Component } from 'react';

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  changeIndex = value => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex + value,
    }));
  };

  render() {
    const { items } = this.props;
    const numberOgItems = items.length;
    const { publicationIndex } = this.state;
    // const position = publicationIndex + 1;
    const currentItem = items[publicationIndex];
    const isFirstItem = publicationIndex === 0;
    const isLastItem = publicationIndex === items.length - 1;

    return (
      <div>
        <Controls
          onBack={() => this.changeIndex(-1)}
          onForward={() => this.changeIndex(1)}
          prevDisabled={isFirstItem}
          nextDisabled={isLastItem}
        />
        <Progress current={publicationIndex + 1} total={numberOgItems} />

        <Texture title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}
