import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

<Menu responsive={true}
  inline={true}
  primary={false}
  closeOnClick={false}
  size='small'
  direction='row'>
    <Anchor path={`/${user.username}/feed`}
      className='active'>
      Photos
    </Anchor>
    <Anchor path={`/${user.username}/followers`}>
      Followers
    </Anchor>
    <Anchor path={`/${user.username}/following`}>
      Following
    </Anchor>
</Menu>
