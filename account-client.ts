/*
 * Account common library
 * account-client.ts
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

import axios, { AxiosInstance } from 'axios';
import { UserClientService } from './client/user-client.service';

export class AccountClient {
  private readonly axiosInstance: AxiosInstance;

  public users: UserClientService;

  constructor(axiosInstance?: AxiosInstance) {
    this.axiosInstance = axiosInstance || axios;

    this.users = new UserClientService(this.axiosInstance);
  }

  public setCredentials(username: string, password: string): void {
    this.axiosInstance.defaults.auth = { username, password };
  }
}

export * from './model';
