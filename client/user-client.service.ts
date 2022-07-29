/*
 * Account common library
 * user-client.service.ts
 * Copyright (C) 2022 reajuria
 * -------------------------------------------------------------------------
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * any later version.
 * -------------------------------------------------------------------------
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * -------------------------------------------------------------------------
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 * -------------------------------------------------------------------------
 * To contact the author, please email <contact@reajuria.com>.
 */

import { AxiosInstance } from 'axios';
import { User } from '../model';

export class UserClientService {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  /**
   * Get user by id
   * @param {string} id User id
   * @returns {User} User
   */
  public async getUser(id: string) {
    const response = await this.axiosInstance.get(`/users/${id}`);
    return new User(response.data);
  }

  public async getUsers() {
    const response = await this.axiosInstance.get('/users');
    return response.data;
  }

  public async createUser(user: User) {
    const response = await this.axiosInstance.post('/users', user);
    return response.data;
  }

  public async updateUser(user: User) {
    const response = await this.axiosInstance.put(`/users/${user.id}`, user);
    return response.data;
  }

  public async deleteUser(id: string) {
    await this.axiosInstance.delete(`/users/${id}`);
  }
}
