import styled from 'styled-components'

const Item = styled.section`
    width: 450px;
    max-height: 350px;
    margin: 5px;
    flex-grow: 1;
    padding: 5px;
    background-color: #7cda24;
    color: white;
    margin: 0;
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    padding-left: 30px;
`;

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: end;
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
            <ItemHeader>Leave us your name and number and we'll send you a text</ItemHeader>
            <Form>
                <Input name='name' placeholder='Your name' />
                <Input name='phone' placeholder='Phone' />
                <SubmitButton type='submit'>Submit</SubmitButton>
            </Form>
        </Item>
    );
}