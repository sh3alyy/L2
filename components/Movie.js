import {View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";




const Movie = ({title,year,icon_name,poster})=> {
    return (
        <View>
            <Image source={poster} style={{height:500,width:400}}/>
            <Text>


                {title} - {year}
            </Text>
            <Icon name ={icon_name} size={100} color="#B23B23"/>
        </View>
    );
};


export default Movie;
