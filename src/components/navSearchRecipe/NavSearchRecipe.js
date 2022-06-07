import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  position: absolute;
  right: 5px;
  top: 4px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0 10px;
  gap: 8px;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
`;
const Btn = styled.button`
  border: 2px solid #f9b613;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: none;
  padding: 10px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  outline: none;
  margin-top: 15px;
`;
const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  color: #72ac31;
  width: 27px;
  height: 27px;

  ${Btn}:hover & {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
const Txt = styled.p`
  color: #f9b613;
  font-size: 1.2rem;
  text-align: center;
  transition: all 0.5s ease;
  transform: translate(-12px, -10px);
  opacity: 0;
  ${StyleLink}:hover & {
    transform: translate(-12px, 0);
    opacity: 1;
  }
`;
const Input = styled.input`
  width: 40%;
  height: 50%;
  border: 2px solid #f9b613;
  border-radius: 0.6em;
  padding-left: 8px;
  background: transparent;
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
  width: 200px;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 0 40px 40px #72ac31 inset;
    color: #fff;
    outline: 0;
  }
`;
const Left = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
const NavSearchRecipe = ({
  setSearchTitle,
  setClear,
  setMoreFilters,
  moreFilters,
  searchTitle,
}) => {
  const history = useHistory();

  const handleSearchRecipe = (e) => {
    if (e.key === 'Enter') {
      history.push({
        pathname: '/search-recipe',
        state: { inputText: e.target.value },
      });
    }
  };
  return (
    <Container>
      <Left>
        <StyleLink to="/dashboard">
          <Button>Add product</Button>
        </StyleLink>
        <Input
          placeholder="Search recipe"
          type="text"
          onChange={(e) => {
            setSearchTitle(e.target.value);
            if (!e.target.value) {
              setClear(true);
            }
          }}
          value={searchTitle}
        />
        {/*<Button onClick={() => setMoreFilters((prevState) => !prevState)}>*/}
        {/*  {moreFilters ? 'Less filters' : 'More filters'}*/}
        {/*</Button>*/}
        {/*{moreFilters && (*/}
        {/*    <SearchBottom>*/}
        {/*      <input type="text" />*/}
        {/*    </SearchBottom>*/}
        {/*)}*/}
      </Left>
      <Right>
        <StyleLink to="/calculator">
          <Btn>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="currentColor"
                d="M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"
              />
            </Svg>{' '}
          </Btn>
          <Txt>Calculator</Txt>
        </StyleLink>
        <StyleLink to="/account">
          <Btn>
            <Svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
              ></path>
            </Svg>{' '}
          </Btn>
          <Txt>Account</Txt>
        </StyleLink>
      </Right>
    </Container>
  );
};

export default NavSearchRecipe;
