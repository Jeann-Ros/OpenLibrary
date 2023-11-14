import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faBookDead, faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
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
      textButton: 'Emprestimos',
      iconButton: faBookOpenReader,
      navigate: () => navigation.navigate(Routes.lendCopy),
    },
    {
      index: '2',
      textButton: 'Baixa de Exemplar',
      iconButton: faBookDead,
      navigate: () => navigation.navigate(Routes.copyWriteOff),
    },
  ];

  return HomeButtonMenu;
}
