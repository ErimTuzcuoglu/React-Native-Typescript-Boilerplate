import React from 'react';
import {IToastProps, useToast} from 'native-base';

interface IUseToastProps {
  show: (props: IToastProps) => unknown;
  close: (id: unknown) => void;
  closeAll: () => void;
  isActive: (id: unknown) => boolean;
}

export interface IWithToastProps {
  toast: IUseToastProps;
}

export const withToast =
  <P extends IWithToastProps>(
    Component: React.ComponentType<P>
  ): React.FC<Pick<P, Exclude<keyof P, keyof IWithToastProps>>> =>
  (props: unknown) => {
    const toast = useToast();
    return <Component {...(props as P)} toast={toast} />;
  };
