import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Detail: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            history.goBack();
          }}>
          ←
        </button>
      </div>
      <div>{id} detail page</div>
    </div>
  );
};

export default Detail;
