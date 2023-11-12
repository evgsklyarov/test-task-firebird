import React, { useEffect } from 'react';
import styles from './Users.module.scss';

import { useAppDispatch, useAppSelector } from 'hooks/state';
import * as actions from 'state/users/actions';

import Loader from 'components/Loader';
import Error from 'components/Error';
import { Title, Paragraph } from 'components/Texts';
import Header from './components/Header';
import List from './components/List';
import ListItem from './components/ListItem';
import UserInfoModal from './components/UserInfoModal';

const Users = () => {
  const dispatch = useAppDispatch();
  const {
    filteredUsers: users,
    loading,
    error,
    selectedUser,
  } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(actions.fetchUsers());

    return () => {
      dispatch(actions.resetState());
    };
  }, [dispatch]);

  const onCloseInfoModal = () => {
    dispatch(actions.setSelectedUser(null));
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.container}>
      <Title>Users</Title>
      <Header />
      <List>
        {users.length ? (
          users.map((user) => <ListItem key={user.id} user={user} />)
        ) : (
          <Paragraph>Not found users</Paragraph>
        )}
      </List>
      <UserInfoModal
        isOpen={!!selectedUser}
        onClose={onCloseInfoModal}
      />
    </div>
  );
};

export default Users;
