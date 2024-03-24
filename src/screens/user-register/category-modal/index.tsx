import {faClose} from '@fortawesome/free-solid-svg-icons';
import {ReactElement, useState} from 'react';
import {Modal} from 'react-native';
import Text from '../../../core/base-text/base-text';
import {
  CloseButton,
  CloseIcon,
  Container,
  ContainerBlack,
  ContainerButton,
  ContainerModal,
  ContainerModalRow,
} from './style';
import Checkbox from '../../../core/checkbox';
import CoreButton from '../../../core/button';

interface ModalProps {
  isVisible: boolean;
  onClose: (values: string[]) => void;
  label?: string;
}

export default function CategoryModal({
  isVisible,
  onClose,
  label = 'Escolha uma opção...',
}: ModalProps): ReactElement {
  const [Categorias, setCategorias] = useState([]);

  return (
    <ContainerModal>
      <Modal
        transparent
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => {
          onClose(Categorias);
        }}>
        <ContainerBlack>
          <Container>
            <ContainerModalRow>
              <CloseButton onPress={() => onClose(Categorias)}>
                <CloseIcon icon={faClose} shouldHide={false} />
              </CloseButton>
              <Text style={{fontSize: 28}}>{label}</Text>
              <CloseButton>
                <CloseIcon icon={faClose} shouldHide={true} />
              </CloseButton>
            </ContainerModalRow>
            <Checkbox
              options={[
                {label: 'Ação', value: 'ACAO'},
                {label: 'Aventura', value: 'AVENTURA'},
                {label: 'Ficção', value: 'FICCAO'},
                {label: 'Romance', value: 'ROMANCE'},
                {label: 'Suspense', value: 'SUSPENSE'},
                {label: 'Mistério', value: 'MISTERIO'},
                {label: 'Fantasia', value: 'FANTASIA'},
                {label: 'Terror', value: 'TERROR'},
                {label: 'Sci-Fi', value: 'SCI_FI'},
                {label: 'Histórico', value: 'HISTORICO'},
                {label: 'Não Ficção', value: 'NAO_FICCAO'},
                {label: 'Autoajuda', value: 'AUTOAJUDA'},
                {label: 'Biografia', value: 'BIOGRAFIA'},
                {label: 'Poesia', value: 'POESIA'},
              ]}
              checkedValue={Categorias}
              onChange={value => {
                setCategorias(value);
              }}
            />
            <ContainerButton>
              <CoreButton
                text="CONFIRMAR"
                action={() => {
                  onClose(Categorias);
                }}
              />
            </ContainerButton>
          </Container>
        </ContainerBlack>
      </Modal>
    </ContainerModal>
  );
}
