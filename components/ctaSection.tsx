import styled from 'styled-components'

const Item = styled.section`
    margin: 5px;
    flex-basis: 50%;
    padding: 5px;
    background-color: #7cda24;
    color: white;
    margin: 0;
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
`;

const ItemDescription = styled.div`
    padding: 5px;
    margin: auto;
`;

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: end;
    margin-top: 15px;
`;

const Input = styled.input`  
    width: 300px;
    height: 40px;
    margin: 0 15px 0 0;
    @media (max-width: 768px) {
        width: 350px;
        margin: 5px;
      }
`;

const SubmitButton = styled.button`
    background-color: #7cda24;
    width: 100px;
    height: 40px;
    margin: 20px;
    border: 1px solid white;
    color: white;
    gap: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const CTASection = () => {
    return (
        <Item>
            <ItemHeader>Leave us your name and number and we'll text you</ItemHeader>
            <ItemDescription>We will talk about what your fitness goals are in addition to helping you pick the right program tailored specifically for you. </ItemDescription>
            <Form>
                <Input name='name' placeholder='Your name' />
                <Input name='phone' placeholder='Phone' />
                <SubmitButton type='submit'>Submit</SubmitButton>
            </Form>
        </Item>
    );
}