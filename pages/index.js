import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Retorno do useStane', name, setName);

  return (
   <QuizBackground backgroundImage={db.bg}>
     <Head>
        <title>Friends - Quiz</title>
      </Head>
     <QuizContainer>
       <QuizLogo />
       <Widget>
          <Widget.Header>
              <h1>Friends Quiz</h1>
           </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosdoEvento) {
                infosdoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão para o react');
              }}
              >
                <input 
                  onChange={function (infosdoEvento) {
                    console.log(infosdoEvento.target.value);
                    //Stade
                    setName(infosdoEvento.target.value);
                  }}
                  placeholder="Diz ai seu nome :)"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar 
                  {name}
                </button>
              </form>
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
