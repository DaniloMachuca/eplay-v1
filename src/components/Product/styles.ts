import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

type Props = {
  background: 'black' | 'gray'
}

export const Card = styled.div<Props>`
  border-radius: 8px;
  padding: 8px;
  position: relative;
  background-color: ${(props) =>
    props.background === 'black' ? colors.gray : colors.black};

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  margin-top: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
