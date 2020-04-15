import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// AUTH UI
const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const Welcome = ({ user }) => (
  <Message color="info">
    <Message.Header>
      Welcome, {user.displayName}
      <Button primary onClick={() => firebase.auth().signOut()}>
        Log out
      </Button>
    </Message.Header>
  </Message>
);

const SignIn = () => (
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />
);

const Banner = ({ user, title }) => (
  <React.Fragment>
    { user ? <Welcome user={ user } /> : <SignIn /> }
    <Title>{ title || '[loading...]' }</Title>
  </React.Fragment>
);

export default AuthUI;