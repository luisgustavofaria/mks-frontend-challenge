import Header from '@/components/Header/Header'
import Products from '@/components/Product/Product'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
`
export default function Home() {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  )
}
