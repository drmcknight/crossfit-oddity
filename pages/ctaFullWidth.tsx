import styled from 'styled-components'

const Item = styled.section`
    margin: 5px;
    flex-basis: 100%;
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
    padding: 15px;
    margin: auto;
`;

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 0 15px 0;
    padding: 10px;
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
    border: 1px solid white;
    color: white;
    gap: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const CTAFullWidth = () => {
    return (
        <Item>
            <ItemHeader>Ready to get started?</ItemHeader>
            <ItemDescription>Leave us your name in number in the form below! We'll reach out and talk about what your fitness goals are and explain next steps. 
                <p>If you're new to CrossFit you must take a Foundations Class to ensure you are at the right starting point before going to regular workouts. At a minimum it is 3 1-hour session with a coach.  Cost is $105. If needed, each additional class is $35.</p></ItemDescription>
            <Form action="https://formspree.io/f/xbjbjkgd" method='POST'>
                <Input name='name' placeholder='Your name' />
                <Input name='phone' placeholder='Phone' />
                <SubmitButton type='submit'>Submit</SubmitButton>
            </Form>
        </Item>
    );
}