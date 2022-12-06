import styled from 'styled-components';

export default function InputField({
  info,
  disabled,
  type,
  text,
  data,
  setData,
  size,
  value = '',
}) {
  // console.log(info, disabled, type, text, setData);
  return (
    <>
      <UserInput
        size={size}
        required={true}
        minLength={1}
        disabled={disabled}
        type={type}
        placeholder={text}
        onChange={(e) => {
          e.info = e.target.value;
          setData(e.target.value);
        }}
        defaultValue={value}
      ></UserInput>
    </>
  );
}

const UserInput = styled.input`
  width: ${(props) => (props.size ? '100%' : '300px')};
  height: 55px;
  background: ${(status) => (status.disabled ? '#F2F2F2' : '#FFFFFF')};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 5px 0 5px 0;
`;
