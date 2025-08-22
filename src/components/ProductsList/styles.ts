import styled from 'styled-components'
import type { Props } from '.'
import { colors } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.gray : colors.black};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
