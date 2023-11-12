import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faBookDead, faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

type HomeButtonProp = {
  index: string;
  textButton: string;
  iconButton: IconDefinition;
  navigate: () => void;
};

export default function HomeButtonsConstructor() {
  const navigation = useNavigation();

  const HomeButtonMenu: HomeButtonProp[] = [
    {
      index: '1',
      textButton: 'Emprestimos',
      iconButton: faBookOpenReader,
      navigate: () => navigation.navigate('Init'),
    },
    {
      index: '2',
      textButton: 'Baixa de Exemplar',
      iconButton: faBookDead,
      navigate: () => navigation.navigate('Init'),
    },
  ];

  return HomeButtonMenu;
}
