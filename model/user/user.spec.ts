/*
 * Account common library
 * user.spec.ts
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

import { User } from './user';

describe('User', () => {
  const testDate = '1967-08-13T00:00:00.000Z';
  const sampleUser = {
    id: '1',
    username: 'test',
    displayName: 'Test User',
    createdAt: new Date(testDate),
    updatedAt: new Date(testDate),
  };

  it('should be defined', () => {
    expect(User).toBeDefined();
  });

  it('should create user', () => {
    const user = new User(sampleUser);
    expect(user).toEqual(sampleUser);
  });

  it('should create user with default values', () => {
    const user = new User();
    expect(user).toEqual({
      id: null,
      username: null,
      displayName: null,
      createdAt: null,
      updatedAt: null,
    });
  });

  it('should parse types correctly', () => {
    const user = new User({
      ...sampleUser,
      createdAt: testDate,
      updatedAt: testDate,
    });
    expect(user).toEqual({
      ...sampleUser,
      createdAt: new Date(testDate),
      updatedAt: new Date(testDate),
    });
  });

  it('should parse _id correctly', () => {
    const user = new User({
      _id: { toHexString: () => sampleUser.id },
    });
    expect(user.id).toEqual(sampleUser.id);
  });
});
