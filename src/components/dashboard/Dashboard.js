import React, { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import SearchIngredients from '../searchIngredients/SearchIngredients';
import styled from 'styled-components';
import IngredientsList from '../ingredientsList/IngredientsList';
import RecipesList from '../recipesList/RecipesList';
import Background from '../background/Background';
import { useFetch } from '../../hooks/useFetch';

const Container = styled.div`
  height: 75vh;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20vh;
  position: absolute;
  z-index: 50;
  background-color: #141414;
  opacity: 0.9;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid #f9b613;
  border-radius: 0.7em;
`;
const Button = styled.button`
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  height: 50px;
  box-sizing: border-box;
  appearance: none;
  background-color: #141414;
  border: 2px solid #f9b613;
  border-radius: 0.6em;
  color: #72ac31;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1;
  padding: 12px 20px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0 40px 40px #72ac31 inset;
    color: #fff;
    outline: 0;
  }
`;
const P = styled.p`
  color: #72ac31;
  font-size: 1.1rem;
  position: absolute;
  bottom: 9vh;
  left: 37%;
  transform: translateX(-50%);
  z-index: 50;
`;
// const ContainerCheckbox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
// `;
const Label = styled.label`
  color: white;
  display: none;
  position: absolute;
  bottom: 6.5vh;
  left: 44%;
  transform: translateX(-50%);
  z-index: 50;
  height: 50px;
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
const Dashboard = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);
  const [onlySelectedIngredients, setOnlySelectedIngredients] = useState(false);
  const { fetchData } = useFetch();
  const { fetchData: fetchIngredients } = useFetch();
  const { fetchData: fetchRecipes, error, fetching } = useFetch();

  useEffect(() => {
    (async () => {
      const secureStorage = localStorage.getItem('secure_token');
      const { _id } = JSON.parse(secureStorage || '{}');
      await fetchIngredients({
        url: 'recipe/get-ingredients',
        body: { _id },
        onSuccess: (data) => {
          setUserIngredients(data?.userIngredients || []);
        },
      });
    })();
  }, []);

  const handleAddProduct = async (ingredient) => {
    const secureStorage = localStorage.getItem('secure_token');
    const { _id } = JSON.parse(secureStorage || '{}');
    setUserIngredients((prevState) => {
      (async () => {
        await fetchData({
          url: 'recipe/update-ingredients',
          body: { userIngredients: [{ checked: true, name: ingredient }, ...prevState], _id },
        });
      })();
      return [{ checked: true, name: ingredient }, ...prevState];
    });
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const testowanie = [];
  //     const response = await fetch(
  //       'https://api.spoonacular.com/recipes/findByIngredients?ingredients=onion&number=100&apiKey=23ab5e14c46b4b67b9561caf6123367b',
  //     );
  //     const data = await response.json();
  //     console.log('data', data);
  //     for (const ing of data) {
  //       const responseone = await fetch(
  //         `https://api.spoonacular.com/recipes/${ing.id}/information?includeNutrition=true&apiKey=23ab5e14c46b4b67b9561caf6123367b`,
  //       );
  //       const dataone = await responseone.json();
  //       testowanie.push(dataone);
  //     }
  //
  //     console.log('testowanie', testowanie);
  //   }
  //
  //   fetchData();
  // }, []);
  return (
    <>
      <Background />
      <Nav num={1} />
      {showRecipes ? (
        <RecipesList
          userIngredients={userIngredients}
          onlySelectedIngredients={onlySelectedIngredients}
          fetchRecipes={fetchRecipes}
          error={error}
          fetching={fetching}
        />
      ) : (
        <Container>
          <SearchIngredients
            handleAddProduct={handleAddProduct}
            userIngredients={userIngredients}
          />
          <IngredientsList
            userIngredients={userIngredients}
            setUserIngredients={setUserIngredients}
          />
        </Container>
      )}
      {!showRecipes && userIngredients.length > 2 && (
        <>
          <P>Search only selected ingredients</P>
          <Checkbox
            type="checkbox"
            id={'searchOnly'}
            checked={onlySelectedIngredients}
            onChange={(e) => {
              setOnlySelectedIngredients(e.currentTarget.checked);
            }}
          />
          <Label htmlFor={'searchOnly'} />
        </>
      )}
      {!fetching && (
        <Button type="button" onClick={() => setShowRecipes((prevState) => !prevState)}>
          {showRecipes ? 'Add product' : 'Find recipes'}
        </Button>
      )}
    </>
  );
};

export default Dashboard;
