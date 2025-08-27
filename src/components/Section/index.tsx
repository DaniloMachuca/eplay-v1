import type { JSX } from 'react'
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  children: JSX.Element
  id?: string
}

const Section = ({ title, background, children, id }: Props) => {
  return (
    <S.Container background={background} id={id}>
      <div className="container">
        <S.Title>{title}</S.Title>
        {children}
      </div>
    </S.Container>
  )
}

export default Section
