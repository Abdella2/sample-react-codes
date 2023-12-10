import { toast } from 'react-toastify';

function init() {}
function log(error) {
  toast('An unexpected error occurred!!!');
  toast.error('An unexpected error occurred!!!');
  console.log('Logging the error', error);
}

export default {
  log,
  init
};
