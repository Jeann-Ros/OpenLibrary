import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faBookDead,
  faBookJournalWhills,
  faBookOpen,
  faBookOpenReader,
  faList12,
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
    {
      index: '3',
      textButton: 'Registrar Exemplar',
      iconButton: faBookOpen,
      navigate: () => navigation.navigate(Routes.copyRegister),
    },
    {
      index: '4',
      textButton: 'Consultar Baixa',
      iconButton: faBookJournalWhills,
      navigate: () => navigation.navigate(Routes.exibCopyWriteOff),
    },
    {
      index: '5',
      textButton: 'Inserir Livro',
      iconButton: faBookJournalWhills,
      navigate: () => navigation.navigate(Routes.registerBOok),
    },
    {
      index: '6',
      textButton: 'Listar Livro',
      iconButton: faList12,
      navigate: () => navigation.navigate(Routes.listarLivros),
    },
    {
      index: '6',
      textButton: 'Listar Empréstimos',
      iconButton: faList12,
      navigate: () => navigation.navigate(Routes.listarEmprestimo),
    },
  ];

  return HomeButtonMenu;
}
