import styled from 'styled-components'
import type { Props } from '.'
import { colors } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.gray : colors.black};

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: regular;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
