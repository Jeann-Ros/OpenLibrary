import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faBook, faUserGroup} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../../../App';
import {UseNavigation} from '../../../core/hooks/use-navigation';

type HomeButtonProp = {
  index: string;
  textButton: string;
  iconButton: IconDefinition;
  navigate: () => void;
};

export default function HomeButtonsConstructor() {
  const navigation = UseNavigation();

  const HomeButtonMenu: HomeButtonProp[] = [
    {
      index: '1',
      textButton: 'Cadastro de Usuário',
      iconButton: faUserGroup,
      navigate: () => navigation.navigate(Routes.user),
    },
    {
      index: '2',
      textButton: 'Cadastro de Livro',
      iconButton: faBook,
      navigate: () => navigation.navigate(Routes.book),
    },
  ];

  return HomeButtonMenu;
}
