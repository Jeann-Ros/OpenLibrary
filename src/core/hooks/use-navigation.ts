import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

export const UseNavigation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return navigation
}