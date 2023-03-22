import * as Styled from './styles'
import avatarImg from '../../aseets/temp/avatar.png'

export function AvatarPicture() {
  return (
    <Styled.Container>
      <Styled.Image
        src={avatarImg}
        alt="Nome do usuário"
      />
    </Styled.Container>
  )
}