import 'font-awesome/css/font-awesome.css';

function Like({ isLiked, onLikeChange }) {
  let heart = 'fa fa-heart';
  if (!isLiked) heart += '-o';
  return (
    <i
      className={heart}
      onClick={onLikeChange}
      style={{ cursor: 'pointer' }}></i>
  );
}

export default Like;
