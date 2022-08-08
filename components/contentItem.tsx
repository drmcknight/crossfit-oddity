import styled from 'styled-components'

const Paragraph = styled.p`
    background-color: grey;
    display: flex;
    flex-direction: row;
    padding 5px;
`;

export const ContentItem = () => {
    return (
        <Paragraph>Paragraph</Paragraph>
    );
}