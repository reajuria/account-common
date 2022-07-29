/*
 * Account common library
 * user-client.service.spec.ts
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
import { UserClientService } from './user-client.service';

describe('UserClientService', () => {
  let service: UserClientService;
  const axiosMock = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  };
  const user = {
    id: '1',
    username: 'test',
    displayName: 'John Doe',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    service = new UserClientService(axiosMock as unknown as AxiosInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should accept a custom axios instance', () => {
    expect(service['axiosInstance']).toBe(axiosMock);
  });

  it('should get user', async () => {
    axiosMock.get.mockResolvedValue({ data: user });

    const result = await service.getUser('1');

    expect(result).toEqual(user);
  });

  it('should get users', async () => {
    const users = [
      {
        ...user,
      },
      {
        ...user,
        id: '2',
      },
    ];
    axiosMock.get.mockResolvedValue({ data: users });
    const result = await service.getUsers();
    expect(result).toEqual(users);
  });

  it('should create user', async () => {
    axiosMock.post.mockResolvedValue({ data: user });
    const result = await service.createUser(user);
    expect(result).toEqual(user);
  });

  it('should update user', async () => {
    axiosMock.put.mockResolvedValue({ data: user });
    const result = await service.updateUser(user);
    expect(result).toEqual(user);
  });

  it('should delete user', async () => {
    axiosMock.delete.mockResolvedValue({});
    await service.deleteUser('1');
    expect(axiosMock.delete).toHaveBeenCalledWith('/users/1');
  });
});
