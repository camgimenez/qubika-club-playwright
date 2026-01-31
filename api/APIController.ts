import { APIRequestContext, expect } from '@playwright/test';

export class APIController {
  constructor(private request: APIRequestContext) {}

  async createUser(user: { email: string; password: string; roles: string[] }) {
    const apiBaseUrl = process.env.API_BASE_URL || 'https://api.club-administration.qa.qubika.com';
    const response = await this.request.post(`${apiBaseUrl}/api/auth/register`, {
      data: {
        email: user.email,
        password: user.password,
        roles: user.roles,
      },
    });
    expect(response.ok(), `Error al registrar usuario: ${response.statusText()}`).toBeTruthy();
    return await response.json();
  }
}
