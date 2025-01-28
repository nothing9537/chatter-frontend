export interface UserStore {
  authToken: string;

  setAuthToken: (authToken: string | undefined) => void;
}
