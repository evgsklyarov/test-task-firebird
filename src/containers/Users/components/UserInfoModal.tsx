import React from 'react'

import Modal from 'components/Modal'
import { Title, Paragraph } from 'components/Texts';
import { useAppSelector } from 'hooks/state';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
// По клику по пользователю в списке должно открываться модальное окно с адресом и компанией этого пользователя.
const UserInfoModal = ({
  isOpen,
  onClose,
}: Props) => {
  const selectedUser = useAppSelector((state) => state.users.selectedUser);

  const getAddress = () => {
    return `${selectedUser?.address.street}, ${selectedUser?.address.suite}, ${selectedUser?.address.city}, ${selectedUser?.address.zipcode}`
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <Title level={3}>Address:</Title>
      <Paragraph>
        {getAddress()}
      </Paragraph>
      <Title level={3}>Company name:</Title>
      <Paragraph>
        {selectedUser?.company.name}
      </Paragraph>
    </Modal>
  )
}

export default UserInfoModal;
