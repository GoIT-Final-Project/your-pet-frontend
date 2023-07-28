import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import { selectPets } from "./../../../../redux/pets/pets-selectors";
import { postPet } from "./../../../../redux/pets/pets-operation";
import { deletePet } from "./../../../../redux/pets/pets-operation";

import {
  UserPetsBody,
  UserPetsBtn,
  NoUserPets,
  UserPetsImg,
  UserPetsInfo,
  UserPetsItem,
  UserPetsItemSpan,
  UserPetsList,
  UserPetsNavBtn,
  UserPetsTitle,
  UserPetsTitleWrap,
  UserPetsBtnDell,
} from "./PetsData.styled";
import { useEffect } from "react";

const PetsData = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pets = useSelector(selectPets);

  useEffect(() => {
    dispatch(postPet());
  }, [dispatch]);

  const handelDellPets = (id) => {
    dispatch(deletePet(id));

    dispatch(postPet());
  };

  return (
    <UserPetsBody>
      <div>
        <UserPetsTitleWrap>
          <UserPetsTitle>My pets:</UserPetsTitle>
          <NavLink to={`add-pet`} state={location.pathname}>
            <UserPetsNavBtn>Add Pet +</UserPetsNavBtn>
          </NavLink>
        </UserPetsTitleWrap>
        {pets.length === 0 ? (
          <NoUserPets>
            You havenot added a pet yet, you have the option to add your furry
            friend!
          </NoUserPets>
        ) : (
          <>
            {pets.map(({ _id, petsURL, name, birthday, type, comments }) => {
              <UserPetsInfo key={_id}>
                <UserPetsImg src={petsURL} alt="pet_image" />
                <UserPetsBtnDell>
                  <svg />
                </UserPetsBtnDell>
                <UserPetsList>
                  <UserPetsItem>
                    Name:{""}
                    <UserPetsItemSpan> {name}</UserPetsItemSpan>
                  </UserPetsItem>
                  <UserPetsItem>
                    Date of birth:{" "}
                    <UserPetsItemSpan> {birthday}</UserPetsItemSpan>
                  </UserPetsItem>
                  <UserPetsItem>
                    Type:{""}
                    <UserPetsItemSpan> {type}</UserPetsItemSpan>
                  </UserPetsItem>
                  <UserPetsItem>
                    Comments:{""}
                    <UserPetsItemSpan>{comments}</UserPetsItemSpan>
                  </UserPetsItem>
                </UserPetsList>
                <UserPetsBtn
                  type="button"
                  onClick={() => {
                    handelDellPets(_id);
                  }}
                >
                  <svg />
                </UserPetsBtn>
              </UserPetsInfo>;
            })}
          </>
        )}
      </div>
    </UserPetsBody>
  );
};

export default PetsData;
