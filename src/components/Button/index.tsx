import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'disabled'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  } else if (type === 'link') {
    return (
      <S.ButtonLink title={title} to={to as string}>
        {children}
      </S.ButtonLink>
    )
  }
  return (
    <S.ButtonDisabled type="button" title={title}>
      {children}
    </S.ButtonDisabled>
  )
}

export default Button
