import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputSpinner from "react-native-input-spinner";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { ScrollView } from 'react-native-gesture-handler';

export default class ClaimModal extends React.PureComponent {

    modal = React.createRef();

    onClosed = () => {
        const { onClosed } = this.props;

        if (onClosed) {
            onClosed();
        }
    };

    openModal = () => {
        if (this.modal.current) {
            this.modal.current.open();
        }
    };

    _listHeaderComponent = () => {      
      return (
        <ScrollView>
            <View style={{height: 440, width: '100%', padding: 20 }}>
                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 30, fontWeight: "bold", color: "#333333"}}>Paiement</Text>
                    <Text style={{fontSize: 15, fontWeight: "bold", color: "#55efc4"}}>Solde : 750 Tbx · 3 Tbx = 1 R$</Text>
                </View>
                
                <TextInput
                    theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                    mode='outlined'
                    label="Pseudonyme"
                    placeholder="Votre pseudo Roblox"
                    left={
                        <TextInput.Icon
                        name="account"
                        />
                    }
                />
                <View style={{marginTop: 15}}>
                            <Text style={{color: "grey"}}>TBX</Text>
                            <InputSpinner
                                max={1000}
                                min={3}
                                step={3}
                                style={s.spinner}
                                textColor={"#333333"}
                                color={"#4cd7b0"}
                                background={"#e7e7e7"}
                                rounded={false}
                                editable={false}
                            />
                            <Icon size={40} style={s.iconConvert} name="arrow-down-bold" />
                            <TextInput
                            mode='outlined'
                            label="R$"
                            disabled
                            />

                            <AwesomeButtonRick style={{marginTop: '5%'}} width='100%' textSize={20} textColor="white" backgroundColor="#55efc4" backgroundDarker="#00b894">Confirmer</AwesomeButtonRick>
                </View>

            </View>
        </ScrollView>
    );
    }

    render() {
        return (
            <Portal>
                <Modalize
                    ref={this.modal}
                    adjustToContentHeight
                    keyboardAvoidingBehavior={'padding'}
                    onClosed={this.onClosed}
                    HeaderComponent={this._listHeaderComponent()}
                />
            </Portal>
        );
    }
}

const s = StyleSheet.create({
    item: {
        alignItems: 'flex-start',

        padding: 15,

        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 1,
    },

    item__name: {
        fontSize: 16,

        marginBottom: 5,
    },

    item__email: {
        fontSize: 14,
        fontWeight: '200',
        color: '#666',
    },
    iconConvert: {
        textAlign: "center",
        marginBottom: -5
    },
    spinner: {
		flex: 1,
		marginRight: 10,
		minWidth: 150,
	},
});