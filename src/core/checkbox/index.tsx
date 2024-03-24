import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ReactElement} from 'react';
import {Colors} from '../../assets/Colors';
import Text from '../base-text/base-text';
import {CheckButton, CheckButtonContainer} from './style';

interface CheckProps {
  options: {label: string; value: string}[];
  checkedValue: string[];
  onChange(value: any): any;
}

function CheckBoxCore({
  options,
  checkedValue,
  onChange,
}: CheckProps): ReactElement {
  let updatedCheckedValues = [...checkedValue];
  return (
    <CheckButtonContainer>
      {options.map(option => {
        let active = updatedCheckedValues.includes(option.value);
        return (
          <CheckButton
            checked={active}
            onPress={() => {
              if (active) {
                updatedCheckedValues = updatedCheckedValues.filter(
                  value => value !== option.value,
                );
                return onChange(updatedCheckedValues);
              }
              updatedCheckedValues.push(option.value);
              onChange(updatedCheckedValues);
            }}>
            <FontAwesomeIcon
              icon={active ? faCheckSquare : faPlusSquare}
              size={40}
              color={Colors.primary_brown}
            />
            <Text style={{fontSize: 30}}>{option.label}</Text>
          </CheckButton>
        );
      })}
    </CheckButtonContainer>
  );
}

export default CheckBoxCore;
