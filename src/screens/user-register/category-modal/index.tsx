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
                {label: 'Ficção Científica', value: 1},
                {label: 'Fantasia', value: 2},
                {label: 'Romance', value: 3},
                {label: 'Mistério', value: 4},
                {label: 'Aventura', value: 5},
                {label: 'História', value: 6},
                {label: 'Biografia', value: 7},
                {label: 'Autoajuda', value: 8},
                {label: 'Terror', value: 9},
                {label: 'Poesia', value: 10},
                {label: 'Drama', value: 11},
                {label: 'Humor', value: 12},
                {label: 'Ação', value: 13},
                {label: 'Suspense', value: 14},
                {label: 'Infantil', value: 15},
                {label: 'Fábula', value: 16},
                {label: 'Didático', value: 17},
                {label: 'Religião', value: 18},
                {label: 'Filosofia', value: 19},
                {label: 'Policial', value: 20},
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
