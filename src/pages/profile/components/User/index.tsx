import { Avatar } from "@/components/Avatar";
import { theme } from "@/styles/stitches.config";
import { BookmarkSimple, BookOpen, Books, UserList } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import { Info } from "../Info";
import { InfoContainer, Name, Since, Split, UserContainer } from "./styles";

export function User() {
  const {data} = useSession()
  const { colors } = theme

  return (
    <UserContainer>
      <Avatar
        src={data?.user?.image!}
        alt={data?.user?.name!}
        width={72}
        height={72}
        loading="lazy"
      />

      <Name>{data?.user?.name}</Name>
      <Since>membro desde 2019</Since>

      <Split />

      <InfoContainer>
        <Info 
          description="Páginas lidas"
          value={3853}
          icon={<BookOpen size={40} color={colors.green100.value} />}
        />

        <Info 
          description="Livros avaliados"
          value={10}
          icon={<Books size={40} color={colors.green100.value} />}
        />

        <Info 
          description="Autores lidos"
          value={8}
          icon={<UserList size={40} color={colors.green100.value} />}
        />

        <Info 
          description="Categoria mais lida"
          value={"Computação"}
          icon={<BookmarkSimple size={40} color={colors.green100.value} />}
        />
      </InfoContainer>
    </UserContainer>
  )
}