import styled from 'styled-components'

const Item = styled.section`
    flex-basis: 50%;
    padding: 5px;
    background-color: white;
    margin-bottom: 35px;
    @media (max-width: 768px) {
        flex-basis: 100%;
        margin-bottom: unset;
    }
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
`;

const ItemDescription = styled.div`
    padding: 0 35px 0;
    margin: auto;
`;

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 25px;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

const Input = styled.input`  
    width: 400px;
    height: 40px;
    margin: 15px 15px 0 0;
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
            <ItemHeader>Let's Chat!</ItemHeader>
            <ItemDescription>Leave us your name and number and we'll text you. We will talk about what your fitness goals are in addition to helping you pick the right program tailored specifically for you. </ItemDescription>
            <Form action="https://formspree.io/f/xbjbjkgd" method='POST'>
                <Input name='name' placeholder='Your name' />
                <Input name='phone' placeholder='Phone' />
                <SubmitButton type='submit'>Submit</SubmitButton>
            </Form>
        </Item>
    );
}