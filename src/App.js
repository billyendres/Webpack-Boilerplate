import styled from "styled-components";

const App = () => {
  return (
    <div>
      <H1>
        App = {process.env.NODE_ENV} - {process.env.name}
      </H1>
    </div>
  );
};

export default App;

const H1 = styled.h1`
  color: blue;
`;
