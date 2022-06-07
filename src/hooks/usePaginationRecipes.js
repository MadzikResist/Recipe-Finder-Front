import { useFetch } from './useFetch';
import { useEffect, useState } from 'react';

let waitingData = false;
function usePaginationRecipes() {
  const [recipes, setRecipes] = useState({});
  const { fetchData, fetching } = useFetch();
  useEffect(() => {
    fetchData({
      url: 'recipe/get-recipes-pagination',
      body: {
        cursor: JSON.stringify({}),
      },
      onSuccess: (data) => {
        setRecipes(data);
      },
    });
    // eslint-disable-next-line
  }, []);
  const loadMore = async (mainData) => {
    try {
      if (mainData.searchClear) {
        const fetchFunc = ({ searchClear, title }) => {
          fetchData({
            url: 'recipe/get-recipes-pagination',
            body: {
              cursor: JSON.stringify({
                lastId: searchClear ? '' : recipes?.pageInfo?.endCursor,
                title,
              }),
            },
            onSuccess: (data) => {
              if (waitingData) {
                fetchFunc(waitingData);
                waitingData = false;
              } else {
                const newEdges = data.edges;
                const pageInfo = data.pageInfo;
                // eslint-disable-next-line no-nested-ternary,no-unused-expressions
                setRecipes({
                  edges: newEdges|| [],
                  pageInfo,
                });
              }
            },
          });
        };
        if (fetching) {
          waitingData = mainData;
        } else {
          fetchFunc(mainData);
        }
      } else {
        const { searchClear, title } = mainData;
        fetchData({
          url: 'recipe/get-recipes-pagination',
          body: {
            cursor: JSON.stringify({
              lastId: searchClear ? '' : recipes?.pageInfo?.endCursor,
              title,
            }),
          },
          onSuccess: (data) => {
            const newEdges = data.edges;
            const pageInfo = data.pageInfo;
            // eslint-disable-next-line no-nested-ternary,no-unused-expressions
            setRecipes({
              edges: [...recipes.edges, ...(newEdges || [])] || [],
              pageInfo,
            });
          },
        });
      }
    } catch (e) {
      // eslint-disable-next-line
      console.log('Error in usePaginationRecipes', e);
    }
  };
  return {
    recipes: recipes?.edges,
    hasNextPage: recipes?.pageInfo?.hasNextPage,
    loading: fetching,
    loadMore: loadMore,
  };
}

export default usePaginationRecipes;
