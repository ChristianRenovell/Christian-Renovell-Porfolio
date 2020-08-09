import React from 'react';
import Name from '../../components/name/Name';

const App = (props) => {
  return (
    <div id="fullpage">
      <div className="section">
          <Name mode = {props.mode}/>
      </div>
    </div>
  );
};
export default App;
