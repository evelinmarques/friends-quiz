import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
   <QuizBackground backgroundImage={db.bg}>
     <QuizContainer>
       <QuizLogo />
       <Widget>
          <Widget.Header>
              <h1>Friends Quiz</h1>
           </Widget.Header>
            <Widget.Content>
              <p>uma pergunta bem bacana aqui</p>
            </Widget.Content>
       </Widget>

       <Widget>
         <Widget.Content>
            <h1>Friends Quiz</h1>

            <p>em construção</p>
         </Widget.Content>
       </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/evelinmarques"/>
    </QuizBackground> 
  );
  
}
