import React, { useState } from 'react';
import styled from 'styled-components';
import { INGREDIENTS } from '../../data/Ingredients';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  border-right: 2px solid #f9b613;
`;
const Input = styled.input`
  width: 40%;
  height: 8%;
  border: 2px solid #f9b613;
  border-radius: 0.6em;
  padding-left: 8px;
  background: transparent;
  margin-bottom: 5%;
  color: white;
  font-size: 1rem;
  :hover {
    border: 2px solid #72ac31;
  }
  :focus {
    outline: none;
    border: 2px solid #72ac31;
  }
`;
const Ingredient = styled.button`
  display: block;
  border: 2px solid #72ac31;
  width: 15vw;
  background-color: transparent;
  color: white;
  padding: 16px 32px;
  font-size: 1rem;
  border-radius: 0.6em;
`;
const Text = styled.h3`
  font-size: 24px;
  color: #72ac31;
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const SearchIngredients = ({ handleAddProduct, userIngredients }) => {
  const [searchText, setSearchText] = useState('');
  const ingredients = INGREDIENTS.filter(
    (ing) => ing.includes(searchText) && !userIngredients.find(obj => obj.name === ing),
  )
    .sort((x, y) => x.length - y.length)
    .slice(0, 7);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search ingredient"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      {searchText?.length > 0 ? (
        <Ingredients>
          {ingredients?.length ? (
            ingredients.map((ing) => (
              <Ingredient onClick={() => handleAddProduct(ing)}>{ing}</Ingredient>
            ))
          ) : (
            <Text>Not found ingredient</Text>
          )}
        </Ingredients>
      ) : (
        <Text>Start typing to search</Text>
      )}
    </Container>
  );
};

export default SearchIngredients;
