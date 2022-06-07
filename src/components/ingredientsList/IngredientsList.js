import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';

const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;
const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Text = styled.h4`
  font-size: 24px;
  color: #72ac31;
`;
const Ingredient = styled.button`
  display: block;
  border: 2px solid #72ac31;
  width: 15vw;
  background-color: transparent;
  border-radius: 0.6em;
  color: white;
  padding: 16px 32px;
  font-size: 1rem;
`;
const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #72ac31 14%, #f9b613 64%);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #f9b613 14%, #72ac31 64%);
  }

  ::-webkit-scrollbar-track {
    background: #141414;
  }
`;
const Label = styled.label`
  color: white;
`;
const Checkbox = styled.input`
  display: none;
  & + label {
    display: block;
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;
  }
  & + label:before {
    content: '\\2714';
    border: 2px solid #72ac31;
    border-radius: 0.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: transparent;
    transition: 0.2s;
    font-size: 24px;
  }
  & + label:active:before {
    transform: scale(0);
  }
  &:checked + label:before {
    background-color: MediumSeaGreen;
    border-color: MediumSeaGreen;
    color: #fff;
  }
`;
const Svg = styled.svg`
  color: red;
  width: 20px;
  height: 20px;
`;
const Btn = styled.button`
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IngredientsList = ({ userIngredients, setUserIngredients }) => {
  const { fetchData } = useFetch();
  return (
    <Container>
      {userIngredients.length ? (
        <Ingredients>
          {userIngredients.map(({ name, checked }) => (
            <ContainerCheckbox>
              <Checkbox
                type="checkbox"
                id={name}
                checked={checked}
                onChange={async (e) => {
                  const idx = userIngredients.findIndex((obj) => obj.name === name);
                  const copyOfArr = [...userIngredients];
                  copyOfArr[idx] = { name, checked: e.currentTarget.checked };
                  setUserIngredients(copyOfArr);
                  const secureStorage = localStorage.getItem('secure_token');
                  const { _id } = JSON.parse(secureStorage || '{}');
                  await fetchData({
                    url: 'recipe/update-ingredients',
                    body: { userIngredients: copyOfArr, _id },
                  });
                }}
              />
              <Label htmlFor={name} />
              <Ingredient>{name}</Ingredient>
              <Btn
                onClick={async () => {
                  const idx = userIngredients.findIndex((obj) => obj.name === name);
                  const copyOfArr = [...userIngredients];
                  copyOfArr.splice(idx, 1);
                  setUserIngredients(copyOfArr);
                  const secureStorage = localStorage.getItem('secure_token');
                  const { _id } = JSON.parse(secureStorage || '{}');
                  await fetchData({
                    url: 'recipe/update-ingredients',
                    body: { userIngredients: copyOfArr, _id },
                  });
                }}
              >
                <Svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                  />
                </Svg>
              </Btn>
            </ContainerCheckbox>
          ))}
        </Ingredients>
      ) : (
        <Text>You haven't added the ingredients yet</Text>
      )}
    </Container>
  );
};

export default IngredientsList;
