import React from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/state';
import { setFilteredUsers, setSearchQuery, fetchUsers } from 'state/users/actions';
import { filterArrayByKeys } from 'utils';

import { SearchInput } from 'components/Forms';
import Button from 'components/Button';

import styles from '../Users.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.users.searchQuery);
  const users = useAppSelector((state) => state.users.users);

  const onChange = (value: string) => {
    dispatch(setSearchQuery(value));

    dispatch(setFilteredUsers(
      filterArrayByKeys(
        users,
        value,
        ['name', 'username', 'email'],
      )
    ))
  };

  const onResetFilter = () => {
    dispatch(setSearchQuery(''));
    dispatch(fetchUsers());
  };

  return (
    <div className={styles.header}>
      <SearchInput
        label="Filter"
        placeholder="Filter by name, username or email"
        onChange={onChange}
        value={searchQuery}
      />
      <Button title="Reset filter" onClick={onResetFilter} />
    </div>
  );
};

export default Header;
