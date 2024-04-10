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
  onClose: (values: number[]) => void;
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
                {label: 'Ação', value: 1},
                {label: 'Aventura', value: 2},
                {label: 'Ficção', value: 3},
                {label: 'Romance', value: 4},
                {label: 'Suspense', value: 5},
                {label: 'Mistério', value: 6},
                {label: 'Fantasia', value: 7},
                {label: 'Terror', value: 8},
                {label: 'Sci-Fi', value: 9},
                {label: 'Histórico', value: 10},
                {label: 'Não Ficção', value: 11},
                {label: 'Autoajuda', value: 12},
                {label: 'Biografia', value: 13},
                {label: 'Poesia', value: 14},
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
