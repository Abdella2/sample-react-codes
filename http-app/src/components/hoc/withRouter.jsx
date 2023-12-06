import { useNavigate, useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent params={params} navigate={navigate} {...props} />;
};

export default withRouter;
