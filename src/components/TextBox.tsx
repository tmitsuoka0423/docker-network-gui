import React, { useMemo, useCallback } from 'react';

interface IProps {
  label: string;
  type: 'text' | 'password';
  value: string;
  onChangeText: (value: string) => void;
}

const TextBox: React.FC<IProps> = (props: IProps) => {
  const label = useMemo(() => {
    return props.label ? <label>{props.label}</label> : null;
  }, [props.label]);

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      props.onChangeText(value);
    },
    [props.onChangeText],
  );

  return (
    <div>
      <label>{label}</label>
      <input name="username" type={props.type} value={props.value} onChange={onValueChange} />
    </div>
  );
};

export default TextBox;
