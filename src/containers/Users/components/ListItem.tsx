import React from 'react';
import { User } from 'interfaces/users';
import Button from 'components/Button';

import { useAppSelector, useAppDispatch } from 'hooks/state';
import useHighlightText from 'hooks/useHighlightText';
import { deleteUser, setSelectedUser } from 'state/users/actions';

import styles from '../Users.module.scss';

interface Props {
  user: User;
}
const ListItem = ({ user }: Props) => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.users.searchQuery);

  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(deleteUser(user.id));
  };

  const onSelectUser = () => {
    dispatch(setSelectedUser(user));
  };

  return (
    <li className={styles['users-item']} onClick={onSelectUser}>
      <span className={styles['users-item__name']}>
        <span className={styles['users-item__title']}>Name:</span>
        <span className={styles['users-item__value']}>
          {useHighlightText(
            user.name,
            searchQuery,
            styles['users-item_highlight']
          )}
        </span>
      </span>
      <span className={styles['users-item__username']}>
        <span className={styles['users-item__title']}>Username:</span>
        <span className={styles['users-item__value']}>
          {useHighlightText(
            user.username,
            searchQuery,
            styles['users-item_highlight']
          )}
        </span>
      </span>
      <span className={styles['users-item__email']}>
        <span className={styles['users-item__title']}>Email:</span>
        <span className={styles['users-item__value']}>
          {useHighlightText(
            user.email,
            searchQuery,
            styles['users-item_highlight']
          )}
        </span>
      </span>
      <span className={styles['users-item__action']}>
        <Button title="Remove" onClick={onDelete} />
      </span>
    </li>
  );
};

export default ListItem;
