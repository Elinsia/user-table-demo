import React from "react";
import { Avatar, Button, Input, TextArea } from "../../styles";
import { convertDateToAge } from "../../../utils";
import { MAX_DATE, validation } from "../../../utils";

const UserItem = ({ 
	user,
	editState, 
	disabled, 
	isValid,
	register, 
	handleEditUser, 
	handleRemoveUser
}) => {
	const { id, avatar, name, birthday, about } = user;
	const convertedToAge = convertDateToAge(birthday);

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
							type='date' 
							max={MAX_DATE}
							defaultValue={birthday}
							readOnly={!editState.isEdit || disabled} 
							{...register(`users.${id}.birthday`, validation.birthday)}
					/>
					(<span>{convertedToAge} years</span>)
				</td>
				<td>
					<TextArea 
						className="on-row" rows={3} 
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
						{editState.isEdit && editState.userId === id ? "Save" : "Edit"}
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
};

export default UserItem;