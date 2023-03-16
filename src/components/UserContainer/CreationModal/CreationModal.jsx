import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Modal,
  Overlay,
  FloatButton,
  CloseButton,
  Input,
  TextArea,
  Form,
  Button,
  Error,
  Label,
} from '../../styles';
import { addUser } from '../../../app/user/userApi';
import { MAX_DATE, validation } from '../../../utils';

function CreationModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const saveUser = (user) => {
    dispatch(addUser(user));
    handleCloseModal();
    reset();
  };

  return (
    <>
      <FloatButton onClick={handleShowModal}>+</FloatButton>
      {showModal && (
        <Overlay>
          <Modal>
            <CloseButton onClick={handleCloseModal} />
            <Form onSubmit={handleSubmit(saveUser)}>
              <Label>
                Name:
                <Input {...register('name', validation.name)} required />
                {errors.name && (
                  <Error>{errors.name?.message || 'Error'}</Error>
                )}
              </Label>
              <Label>
                Birthday:
                <Input
                  type="date"
                  max={MAX_DATE}
                  {...register('birthday', validation.birthday)}
                  required
                />
                {errors.birthday && (
                  <Error>{errors.birthday?.message || 'Error'}</Error>
                )}
              </Label>
              <Label>
                About:
                <TextArea
                  rows={3}
                  {...register('about', validation.about)}
                  required
                />
                {errors.about && (
                  <Error>{errors.about?.message || 'Error'}</Error>
                )}
              </Label>
              <Button className="primary full-width" type="submit">
                Submit
              </Button>
            </Form>
          </Modal>
        </Overlay>
      )}
    </>
  );
}

export default CreationModal;
