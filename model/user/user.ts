/*
 * Account common library
 * user.ts
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

export interface IUser {
  id: string;
  username: string;
  displayName: string;
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
}

export class User implements IUser {
  id: string = null;
  username: string = null;
  displayName: string = null;
  createdAt: Date = null;
  updatedAt: Date = null;

  constructor(params?: Partial<IUser & { _id: any }>) {
    if (
      params?._id &&
      typeof params._id === 'object' &&
      'toHexString' in params._id
    ) {
      this.id = params._id.toHexString();
    } else {
      this.id = params?.id ?? this.id;
    }

    this.username = params?.username ?? this.username;
    this.displayName = params?.displayName ?? this.displayName;
    this.createdAt = params?.createdAt
      ? new Date(params.createdAt)
      : this.createdAt;
    this.updatedAt = params?.updatedAt
      ? new Date(params.updatedAt)
      : this.updatedAt;
  }
}
