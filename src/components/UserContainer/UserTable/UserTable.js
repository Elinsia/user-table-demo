import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, updateUser, removeUser } from "../../../app/user/userApi";
import { userSelector, loadingSelector } from "../../../app/user/userSlice";
import { Table, EmptyState } from '../../styles';
import UserItem from "../UserItem";

const UserTable = () => {
	const users = useSelector(userSelector);
	const isLoading = useSelector(loadingSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUsers());
	}, [dispatch]);

	const {
		register,
		formState: {
				isValid,
		},
		getValues, 
	} = useForm();


	const [editState, setEditState] = useState({
			userId: null,
			isEdit: false,
	});

	const handleEditUser = (id) => {
			if(editState.isEdit) {
				const user = getValues().users;
				dispatch(updateUser({
					id: editState.userId,
					user: user[editState.userId]
				}));
				setEditState({
						userId: null,
						isEdit: false,
				});
		} else {
				setEditState({
						userId: id,
						isEdit: true,
				});
			}
			
	};

	const handleRemoveUser = (id) => {
		if(editState.isEdit) {
			setEditState({
				userId: null,
				isEdit: false,
			});
		}
		dispatch(removeUser(id));
	}

	if(isLoading) {
		return <EmptyState> Loading... </EmptyState>
	};

	return (
		<>
			{users.length !== 0 ? (
				<form onSubmit={(e) => e.preventDefault()}>
						<Table>
								<thead>
										<tr>
											<th>ID</th>
											<th>Person</th>
											<th>Birthday</th>
											<th>About</th>
											<th>Actions</th>
										</tr>
								</thead>
								<tbody>
										{
											users.map((user) => (
												<UserItem 
													key={user.id} 
													editState={editState}
													user={user} 
													register={register}
													isValid={isValid}
													handleRemoveUser={handleRemoveUser}
													handleEditUser={handleEditUser}
													disabled={editState.isEdit && editState.userId !== user.id}
												/>
											))
										}
								</tbody>
						</Table>
				</form>
			) : <EmptyState> No data </EmptyState>}
		</>
	);
};

export default UserTable;