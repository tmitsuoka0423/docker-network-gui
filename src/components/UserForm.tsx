import React, { useCallback } from 'react';
import IUser from '../states/IUser';
import CountButton from './CountButton';
import TextBox from './TextBox';

interface IProps {
  name: string;
  count: number;
}

const UserForm: React.FC<IUser> = (props: IProps) => {
  const { name, count } = props;

  const onNameChange = useCallback((value: string) => {
    // TODO 後で実装
  }, []);

  const onCountClick = useCallback(() => {
    // TODO 後で実装
  }, []);

  return (
    <div>
      <p>
        <TextBox value={name} label="ユーザー名" onChangeText={onNameChange} />
      </p>
      <p>
        <CountButton count={count} label="訪問" onClick={onCountClick} />
      </p>
    </div>
  );
};

export default UserForm;
