import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faSkull, faUserGroup} from '@fortawesome/free-solid-svg-icons';
import {UseNavigation} from '../../../core/hooks/use-navigation';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {Routes} from '../../../../App';

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
  ];

  return HomeButtonMenu;
}
