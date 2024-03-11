import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faBookDead,
  faBookJournalWhills,
  faBookOpen,
  faBookOpenReader,
  faList12,
  faLock,
  faSkull,
} from '@fortawesome/free-solid-svg-icons';
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
    /*     {
      index: '1',
      textButton: 'Teste de botão',
      iconButton: faSkull,
      navigate: () => navigation.navigate(Routes.teste),
    }, */
  ];

  return HomeButtonMenu;
}
