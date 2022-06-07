import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import usePaginationRecipes from '../../hooks/usePaginationRecipes';
import { useForm, useWatch } from 'react-hook-form';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import Background from '../background/Background';
import NavSearchRecipe from '../navSearchRecipe/NavSearchRecipe';

const Container = styled.div`
  width: 80vw;
  margin: 100px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SearchTop = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  right: 5px;
  top: 16px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 10px;
`;
const SearchBottom = styled.div`
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
const SearchInput = styled.div``;
const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  border: 2px solid black;
  padding: 4px;

  :hover {
    border: 2px solid #f9b613;
  }
`;
const Input = styled.input`
  width: 40%;
  height: 50%;
  border: 2px solid #f9b613;
  border-radius: 0.6em;
  background: transparent;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  :hover {
    border: 2px solid #72ac31;
  }
  :focus {
    outline: none;
    border: 2px solid #72ac31;
  }
`;
const Button = styled.button`
  height: 50%;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #f9b613;
  border-radius: 0.6em;
  color: #72ac31;
  cursor: pointer;
  display: flex;
  align-self: center;
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
const ContainerInside = styled.div`
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
const Title = styled.h1`
  font-size: 1.3rem;
  line-height: 1.9rem;
  font-weight: 500;
  height: 3.9rem;
  display: block;
  margin-top: 10px;
  color: white;
`;
const Flex = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 8px;
  margin: 8px 0;
`;
const Desc = styled.div`
  color: white;
`;
const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;
const Svg = styled.svg`
  fill: white;
  width: 30px;
  height: 30px;
`;
const Text = styled.p`
  font-size: 1rem;
  color: white;
`;
const Image = styled.div`
  background-image: url(${(props) => props.bgRecipe});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 250px;
`;
const SearchRecipe = () => {
  const history = useHistory();
  const location = useLocation();
  const { recipes, loadMore, hasNextPage, loading } = usePaginationRecipes();
  const [searchTitle, setSearchTitle] = useState();
  const { control, getValues, setValue, register } = useForm();
  const [clear, setClear] = useState(false);
  const [moreFilters, setMoreFilters] = useState(false);
  // const watch = useWatch({
  //   control,
  // });
  useEffect(() => {
    if (location?.state?.inputText) {
      const asyncLoad = async () => {
        setClear(false);
        await loadMore({
          title: location?.state?.inputText,
          searchClear: true,
        });
        setSearchTitle(location?.state?.inputText);
      };
      asyncLoad();
    }
  }, []);

  useEffect(() => {
    const {} = getValues() || {};
    if (loadMore && (clear || searchTitle)) {
      const asyncLoad = async () => {
        setClear(false);
        await loadMore({
          title: searchTitle,
          searchClear: true,
        });
      };
      asyncLoad();
    }
    // eslint-disable-next-line
  }, [searchTitle]);

  const nextFn = async () => {
    const {} = getValues() || {};
    if (hasNextPage && !loading) {
      await loadMore({
        title: searchTitle,
        searchClear: false,
      });
    }
  };

  return (
    <>
      <Background />
      <NavSearchRecipe
        setSearchTitle={setSearchTitle}
        setClear={setClear}
        setMoreFilters={setMoreFilters}
        moreFilters={moreFilters}
        searchTitle={searchTitle}
      />
      <Container>
        {!recipes?.length && loading ? (
          <div className="mt-3">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {recipes?.length > 0 && nextFn ? (
              <InfiniteScroll
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4,1fr)',
                  backgroundColor: '#141414',
                  opacity: 0.9,
                  zIndex: 50,
                }}
                dataLength={recipes.length}
                next={nextFn}
                hasMore={hasNextPage}
                loader={<p>Loading more data, please wait...</p>}
                scrollThreshold={0.6}
              >
                {recipes.map((ing) => (
                  <Recipe
                    key={ing?._id}
                    onClick={() => {
                      history.push({
                        pathname: `/recipe/${ing._id}`,
                      });
                    }}
                  >
                    <Image bgRecipe={ing?.image} />
                    <Title>{ing?.title}</Title>
                    <Flex>
                      <IconText>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                        </Svg>
                        <Text>{ing.readyInMinutes} min</Text>
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
                        <Text>{ing.servings} servings</Text>
                      </IconText>
                      <IconText>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
                        </Svg>
                        <Text>{ing.aggregateLikes} likes</Text>
                      </IconText>
                    </Flex>
                    <Desc
                      dangerouslySetInnerHTML={{ __html: `${ing?.summary?.substring(0, 100)}...` }}
                    />
                  </Recipe>
                ))}
              </InfiniteScroll>
            ) : (
              <p>Not found</p>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default SearchRecipe;
