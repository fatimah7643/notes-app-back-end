import ClientError from './client-error.js';
 
class AuthenticationError extends ClientError {
  constructor(message) {
    super(message, 403);
    this.name = 'AuthenticationError';
  }
}
 
export default AuthenticationError;