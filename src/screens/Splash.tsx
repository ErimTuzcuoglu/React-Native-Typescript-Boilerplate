import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {Image, Text} from 'native-base';

/* #region  Local imports */
import AppNavigator from '@navigation/AppNavigator';
import {IApplicationState} from '@store/IApplicationState';
import {StartupAction} from '@store/action';
import Images from '@theme/Images';
import ScreenDimensions from '@infrastructure/ScreenDimensions';
import Colors from '@theme/Colors';
import {IWithToastProps, withToast} from '@components';
/* #endregion */

interface ISplashProps
  extends ConnectedProps<typeof connector>,
    IWithToastProps {}
interface ISplashState {
  isStartupFinished: boolean;
}

class Splash extends Component<ISplashProps, ISplashState> {
  /*eslint-disable @typescript-eslint/no-unused-vars*/
  constructor(props: ISplashProps, state: ISplashState) {
    super(props);
    this.state = {
      ...state
    };
  }

  private isFinishedCallback = (isStartupFinished: boolean) => {
    const splashTimeout: NodeJS.Timeout = setTimeout(() => {
      clearTimeout(splashTimeout);
      this.setState({isStartupFinished});
    }, 3000);
  };

  componentDidMount(): void {
    this.props.toast.show({title: 'Hello from RNTBoilerplate'});
    this.props.startup(this.isFinishedCallback);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        {this.state.isStartupFinished ? (
          <AppNavigator />
        ) : (
          <View style={styles.splashContainer}>
            <Text fontSize="xl" style={styles.title}>
              RN Typescript BoilerPlate
            </Text>
            <Image alt="Logo" source={Images.logo} style={styles.logo} />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: ScreenDimensions.totalSize(15 * 1.0625),
    width: ScreenDimensions.totalSize(15)
  },
  safeAreaContainer: {
    flex: 1
  },
  splashContainer: {
    alignItems: 'center',
    backgroundColor: Colors.orange,
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    marginBottom: 20
  }
});

const mapStateToProps = (state: IApplicationState) => ({
  // userInfo: state.user.userInfo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  startup: (isFinishedCallback: (isFinished: boolean) => void) =>
    dispatch(StartupAction({isFinishedCallback}))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withToast(Splash));
