import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

function Posts() {
  const { year, month } = useParams();
  return (
    <Fragment>
      <h1>Posts</h1>
      <div>
        Year:{year};Month:{month}
      </div>
    </Fragment>
  );
}

export default Posts;
