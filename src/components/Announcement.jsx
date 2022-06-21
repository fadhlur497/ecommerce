import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: DarkSlateBlue;
    color: white;
    display: flex;
    align-center: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>
        Kesepakatan Super! Pengiriman gratis sesuai pesanan di atas Rp.50.000 saja
    </Container>
  )
}

export default Announcement