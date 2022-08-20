import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import Background from '../background/Background';
import Nav from '../nav/Nav';
import Loading from "../loading/Loading";

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20vh;
  position: absolute;
  z-index: 50;
  background-color: #141414;
  opacity: 0.9;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid #f9b613;
  border-radius: 0.7em;
  color: white;
  padding: 32px;
  ol {
    counter-reset: my-awesome-counter;
    list-style: none;
    padding-left: 40px;
  }
  ol li {
    margin-bottom: 32px;
    counter-increment: my-awesome-counter;
    position: relative;
  }
  ol li::before {
    content: counter(my-awesome-counter);
    color: #72ac31;
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    --size: 32px;
    left: calc(-1 * var(--size) - 10px);
    line-height: var(--size);
    width: var(--size);
    height: var(--size);
    top: 0;
    background: black;
    border: 2px solid #fcd000;
    border-radius: 50%;
    text-align: center;
  }
`;
const Title = styled.h1`
  margin: 16px 0 32px 0;
`;
const Image = styled.div`
  background-image: url(${(props) => props.bgRecipe});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  width: 568px;
  height: 382px;
`;
const Flex = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 8px;
  margin: 16px 0;
`;
const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 100px;
`;
const Svg = styled.svg`
  fill: white;
  background: orange;
  border-radius: 50%;
  width: 40px;
  padding: 3px;
  height: 40px;
`;
const Text = styled.p`
  font-size: 1rem;
`;
const Summary = styled.p`
  font-size: 1.2rem;
  width: 90%;
  margin-top: 16px;
  margin-bottom: 32px;
`;
const SubTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 16px;
  color: #72ac31;
`;
const SubFlex = styled.div`
  //display: flex;
  //flex-wrap: wrap;
  //gap: 8px;
  //width: 60%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 48%;
  grid-gap: 8px;
  margin-bottom: 32px;
`;
const IngredientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const ImageIng = styled.div`
  background-image: url(${(props) => props.bgRecipe});
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #f9b613;
  border-radius: 0.7em;
  background-color: white;
  width: 110px;
  height: 105px;
`;
const IngFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 8px;
`;
const Nutrition = styled.div`
  border: 2px solid #f9b613;
  font-size: 1.2rem;
  padding: 8px;
  text-align: center;
`;
const QuickviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  margin-bottom: 16px;
`;
const ColorName = styled.p`
  color: #72ac31;
  font-weight: bold;
`;
const SubTitle2 = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 8px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
  margin-bottom: 16px;
`;
const PairingWineContainer = styled.div``;
const FlexDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-gap: 8px;
`;
const NameDescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PercentName = styled.div`
  background-color: #72ac31;
  width: ${(props) => `${props.width}%`};
`;
const DetailName = styled.div``;
const PercentDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;
const WinePairingName = styled.div``;
const WinePairing = styled.div`
  display: flex;
  gap: 16px;
`;
const ImageWine = styled.div`
  background-image: url(${(props) => props.bgRecipe});
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #f9b613;
  border-radius: 0.7em;
  background-color: white;
  width: 150px;
  height: 250px;
`;
const DescWine = styled.div`
  font-size: 1.2rem;
  width: 50%;
  margin-top: 30px;
`;
const Recipe = () => {
  let { id } = useParams();
  const { data, fetchData, error, fetching } = useFetch();
  useEffect(() => {
    fetchData({
      url: 'recipe/get-recipe',
      body: {
        recipeId: id,
      },
    });
  }, []);
  console.log('Data', data);
  const indexOfFirst = (data?.summary || '').indexOf('Try');
  const removeDuplicate = () => {
    const sortEq = [];
    if (data?.analyzedInstructions?.length) {
      data.analyzedInstructions.forEach((inst) => {
        inst.steps.forEach((step) => {
          step.equipment.forEach((eq) => {
            sortEq.push({
              image: eq.image,
              name: eq.name,
            });
          });
        });
      });
    }
    return sortEq;
  };
  const sortedEq = removeDuplicate();
  const mainNutrients = [
    data?.nutrition?.[0]?.nutrients?.[0],
    data?.nutrition?.[0]?.nutrients?.[8],
    data?.nutrition?.[0]?.nutrients?.[1],
    data?.nutrition?.[0]?.nutrients?.[3],
  ];
  const winePairing = data?.winePairing?.productMatches?.[0];
  const winePairingName = data?.winePairing?.pairedWines?.[0];

  console.log(mainNutrients);
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (fetching) {
    return <Loading />;
  }

  return (
    <>
      <Background />
      <Nav num={1} />
      <Container>
        <Title>{data?.title}</Title>
        <Image bgRecipe={data?.image} />
        <Flex>
          <IconText>
            <img src="https://spoonacular.com/application/frontend/images/badges/fast.svg" alt="" />
            <Text>{data?.readyInMinutes} min</Text>
          </IconText>
          <IconText>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
              <g>
                <path
                  d="M268.668,317.187l88.987-0.012l-0.023-7.437H268.11v-8.481h89.521v-8.215l-89.521-0.012v-10.016l89.545,2.859v-7.762
			l-75.754-9.435c0,0-2.847-0.221-3.927-0.221c-11.677,0-22.11,5.415-28.919,13.884c-31.486,27.908-63.642,8.854-71.27,8.854
			c-8.458,0.023-138.535,0.023-138.535,0.023v0.023c-0.104,0-0.174-0.047-0.296-0.047c-7.959,0.012-14.419,6.473-14.419,14.442
			c0,7.959,6.472,14.431,14.419,14.442c0.134-0.012,0.203-0.047,0.284-0.047v0.023c0,0,128.474,0.012,138.286,0.012
			c8.864-0.023,45.817-16.115,73.296,10.793c0.023,0.023,0.116,0.07,0.163,0.117c6.204,6.564,14.778,10.91,24.423,11.561
			c0.674,0.047,2.369,0.023,2.369,0.023l79.867-9.18l0.012-8.516l-89.011,2.544L268.668,317.187z"
                />
                <path
                  d="M56.993,169.75v80.954c0,6.6,5.356,11.943,11.955,11.943h158.078c6.611,0,11.944-5.344,11.944-11.943v-87.105
			c14.431-7.233,26.56-17.202,33.81-30.824c14.907-28.042,16.069-55.207,3.301-76.48c-12.758-21.198-37.645-33.357-68.318-33.357
			c-21.941,0-41.589,9.62-57.669,21.808c-14.361-15.894-42.083-30.4-71.711-29.627c-19.13,0.5-46.254,7.581-66.912,38.551
			c-10.637,15.953-13.896,32.799-9.695,50.1C9.723,136.463,42.998,160.781,56.993,169.75z M31.368,66.931
			C43.382,48.905,59.41,39.517,78.993,39.017c21.332-0.5,42.867,10.126,53.19,21.536c-16.295,16.493-26.136,32.445-26.973,33.839
			c-3.421,5.629-1.626,12.966,4.014,16.405c5.635,3.428,12.979,1.644,16.417-4.008c0.354-0.593,37.069-59.929,82.098-59.929
			c22.076,0,39.504,7.936,47.822,21.75c8.296,13.792,6.902,32.585-3.915,52.917c-19.81,37.267-104.33,38.766-135.235,36.209
			c-6.559-0.586-12.362,4.351-12.897,10.922c-0.552,6.587,4.328,12.374,10.91,12.92c1.331,0.11,10.347,0.807,23.545,0.807
			c20.118,0,49.955-1.667,77.09-9.591v65.931H80.893v-75.708c0-4.345-2.353-8.342-6.146-10.457
			c-0.418-0.238-42.344-23.906-49.745-54.503C22.428,87.421,24.513,77.237,31.368,66.931z"
                />
              </g>
            </Svg>
            <Text>{data?.servings} servings</Text>
          </IconText>
          <IconText>
            <img
              src="https://spoonacular.com/application/frontend/images/badges/popular.svg"
              alt=""
            />
            <Text>{data?.aggregateLikes} likes</Text>
          </IconText>
          {data?.cheap && (
            <IconText>
              <img
                src="https://spoonacular.com/application/frontend/images/badges/cheap.svg"
                alt=""
              />
              <Text>Very cheap</Text>
            </IconText>
          )}
          {data?.dairyFree && (
            <IconText>
              <img
                src="https://spoonacular.com/application/frontend/images/badges/dairy-free.svg"
                alt=""
              />
              <Text>Dairy Free</Text>
            </IconText>
          )}
          {data?.glutenFree && (
            <IconText>
              <img
                src="https://spoonacular.com/application/frontend/images/badges/gluten-free.svg"
                alt=""
              />
              <Text>Gluten Free</Text>
            </IconText>
          )}
          {data?.vegetarian && (
            <IconText>
              <img
                src="https://spoonacular.com/application/frontend/images/badges/vegetarian.svg"
                alt=""
              />
              <Text>Vegetarian</Text>
            </IconText>
          )}
          {data?.veryHealthy && (
            <IconText>
              <img
                src="https://spoonacular.com/application/frontend/images/badges/protein.svg"
                alt=""
              />
              <Text>Very Healthy</Text>
            </IconText>
          )}
          {data?.veryPopular && (
            <IconText>
              <img
                src="https://spoonacular.com/application/frontend/images/badges/popular.svg"
                alt=""
              />
              <Text>Very Popular</Text>
            </IconText>
          )}
          {data?.vegan && (
            <IconText>
              <img
                src="https://spoonacular.com/application/frontend/images/badges/vegan.svg"
                alt=""
              />
              <Text>Vegan</Text>
            </IconText>
          )}
        </Flex>
        <Summary dangerouslySetInnerHTML={{ __html: data?.summary?.substring(0, indexOfFirst) }} />
        <SubTitle>Ingredients</SubTitle>
        <SubFlex>
          {data?.extendedIngredients?.map((ing) => {
            return (
              <IngFlex>
                <p>
                  {ing?.measures?.metric?.amount} {ing?.measures?.metric?.unitLong}{' '}
                </p>
                <IngredientContainer key={ing?.name}>
                  <ImageIng
                    bgRecipe={`https://spoonacular.com/cdn/ingredients_100x100/${ing?.image}`}
                  />
                </IngredientContainer>
                <p>{ing?.name}</p>
              </IngFlex>
            );
          })}
        </SubFlex>
        <SubTitle>Equipment</SubTitle>
        <SubFlex>
          {sortedEq
            ?.filter((value, index, self) => index === self.findIndex((t) => t.name === value.name))
            ?.map((eq) => {
              return (
                <IngredientContainer key={eq?.name}>
                  <p>{eq?.name}</p>
                  <ImageIng
                    bgRecipe={`https://spoonacular.com/cdn/equipment_100x100/${eq?.image}`}
                  />
                </IngredientContainer>
              );
            })}
        </SubFlex>
        <SubTitle>Instructions</SubTitle>
        <Summary dangerouslySetInnerHTML={{ __html: data?.instructions }} />
        <SubTitle>Nutritional Information</SubTitle>
        <SubTitle2>Quickview</SubTitle2>
        <QuickviewContainer>
          {mainNutrients?.map((nut) => {
            return (
              <Nutrition key={nut?.name}>
                <p>
                  {nut?.amount}
                  {nut?.unit} <ColorName>{nut?.name}</ColorName>
                </p>
              </Nutrition>
            );
          })}
          <Nutrition>
            <p>
              {data?.healthScore || 0}% <ColorName>Health Score</ColorName>
            </p>
          </Nutrition>
        </QuickviewContainer>
        <SubTitle2>Detailed information</SubTitle2>
        <DetailContainer>
          {data?.nutrition?.[0]?.nutrients?.map((nut) => {
            return (
              <FlexDetail>
                <DetailName>{nut?.name}</DetailName>
                <DetailName>
                  {nut?.amount}
                  {nut?.unit}
                </DetailName>
                <PercentDiv>
                  <PercentName width={nut?.percentOfDailyNeeds} />
                  <DetailName>{nut?.percentOfDailyNeeds}%</DetailName>
                </PercentDiv>
              </FlexDetail>
            );
          })}
        </DetailContainer>
        {winePairing && winePairingName && (
          <PairingWineContainer>
            <SubTitle>Pairing Wine</SubTitle>
            <WinePairing>
              <ImageWine bgRecipe={winePairing?.imageUrl} />
              <NameDescContainer>
                <SubTitle2>{winePairingName}</SubTitle2>
                <DescWine> {winePairing?.description}</DescWine>
              </NameDescContainer>
            </WinePairing>
          </PairingWineContainer>
        )}
      </Container>
    </>
  );
};

export default Recipe;
