import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Button, Input, TextArea,
} from '../../styles';
import { convertDateToAge, MAX_DATE, validation } from '../../../utils';

function UserItem({
  user,
  editState,
  disabled,
  isValid,
  register,
  handleEditUser,
  handleRemoveUser,
}) {
  const {
    id, avatar, name, birthDate, about,
  } = user;
  const convertedToAge = convertDateToAge(birthDate);

  /* Avatar is genered by Mock API */
  return (
    <tr>
      <td>{id}</td>
      <td>
        <Avatar>
          <img src={avatar} alt="" />
          <div>
            <Input
              className="on-row"
              defaultValue={name}
              readOnly={!editState.isEdit || disabled}
              {...register(`users.${id}.name`, validation.name)}
            />
          </div>
        </Avatar>
      </td>
      <td>
        <Input
          className="on-row"
          type="date"
          max={MAX_DATE}
          defaultValue={birthDate}
          readOnly={!editState.isEdit || disabled}
          {...register(`users.${id}.birthday`, validation.birthday)}
        />
        (
        <span>
          {convertedToAge}
          {' '}
          years
        </span>
        )
      </td>
      <td>
        <TextArea
          className="on-row"
          rows={3}
          defaultValue={about}
          readOnly={!editState.isEdit || disabled}
          {...register(`users.${id}.about`, validation.about)}
        />
      </td>
      <td align="center">
        <Button
          disabled={disabled || !isValid}
          className="secondary"
          onClick={() => handleEditUser(id)}
          primary
        >
          {editState.isEdit && editState.userId === id ? 'Save' : 'Edit'}
        </Button>
        <Button
          disabled={disabled}
          className="danger"
          onClick={() => handleRemoveUser(id)}
          danger
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    birthDate: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  editState: PropTypes.shape({
    isEdit: PropTypes.bool,
    userId: PropTypes.string,
  }).isRequired,
  disabled: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  handleEditUser: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
};

export default UserItem;
