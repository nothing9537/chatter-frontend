export class AuthToken {
  public static setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  public static removeToken() {
    localStorage.removeItem('authToken');
  }

  public static getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
