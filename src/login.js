import React from 'react';
import styled from 'styled-components'

let Container = styled.div`
width: 100%;
height: 1000px;
display: flex;
justify-content: center;
align-items: center;
`
let Box = styled.div`
width: 500px;
height: 800px;
border-radius: 30px;
text-align: center;
border: 1px solid black;
`
let Title = styled.h1`
text-align: center;
margin-top: 50px;
`
let Input = styled.input`
margin-top: 50px;
width: 300px;
height: 50px;
border-radius: 10px;
`


function LoginPage() {
  return (
    <div className="login-container">
      <Container>
      <Box>
        <Title>로그인</Title>
        <Input></Input>
        <Input></Input>
      </Box>
      </Container>
    </div>
  )
}
export default LoginPage;