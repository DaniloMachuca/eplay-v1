import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link href="#">RPG</S.Link>
            </li>
            <li>
              <S.Link href="#">Ação</S.Link>
            </li>
            <li>
              <S.Link href="#">Aventura</S.Link>
            </li>
            <li>
              <S.Link href="#">Esportes</S.Link>
            </li>
            <li>
              <S.Link href="#">Simulação</S.Link>
            </li>
            <li>
              <S.Link href="#">Estratégia</S.Link>
            </li>
            <li>
              <S.Link href="#">FPS</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link href="#">Novidades</S.Link>
            </li>
            <li>
              <S.Link href="#">Promoções</S.Link>
            </li>
            <li>
              <S.Link href="#">Em breve</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
