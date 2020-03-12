import { StyleSheet } from "react-native";
export default StyleSheet.create({
    logContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1

    }, appStyle: {
        backgroundColor: '#579181',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    errorText: {
        color: "#ffffff",
        fontSize:14,
        paddingHorizontal:16,
        paddingBottom: 8 
    },logoImage: {

    }, logoText: {
        marginVertical: 20,
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }, formTextInput: {
        width: 300  ,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        color: '#ffffff',
        fontSize: 16,
        marginVertical: 5
    }, buttonTextForm: {
        width: 300,
        borderRadius: 25,
        color: '#ffffff',
        fontSize: 16,
        marginVertical: 16,
        textAlign: 'center'

    }, buttonForm: {
        width: 300,
        backgroundColor: '#00897b',
        borderRadius: 25,
        color: '#ffffff',
        fontSize: 16,
        marginVertical: 16
    }, SingupText: {

        fontSize: 16,
        color: 'rgba(255,255,255,0.6)'


    }, SingupTextContent: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginVertical: 16,
        
    },SingupButtont:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight:'500'
    }
})