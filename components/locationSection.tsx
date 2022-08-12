import styled from 'styled-components'

const Item = styled.section`
    height: 270px;
    background-color: red;
    margin: 0;
    flex-basis: 50%;
    background-image: url('/images/oddity-location.png');
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
`;

const ItemDescription = styled.p`
    padding: 15px;
`;

const HeroImageSection = styled.section`
    flex-basis: 100%;
    margin: 0;
`;

const Mask = styled.div`
    background-color:rgba(0, 0, 0, 0.4);
    width:100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Address = styled.span`
    margin: auto;
`;

export const LocationSection = () => {
    return (
        <Item>
            <Mask>
                <Address>
                    102 Research Blvd <br /> Madison, AL 35758
                </Address>
            </Mask>
        </Item>
    );
}