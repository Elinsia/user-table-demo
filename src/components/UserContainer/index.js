import React from "react";
import { Container } from '../styles/custom/Container';
import { Title } from '../styles/Title';
import CreationModal from './CreationModal';
import UserTable from './UserTable';

export const UserContainer = () => (
    <Container>
      <Title>Users Table</Title>
      <UserTable />
      <CreationModal />
    </Container>
);