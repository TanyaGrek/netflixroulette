import styled from 'styled-components';

export const InputWrapper = styled.input`
  background: rgba(50, 50, 50, 0.8);
  mix-blend-mode: normal;
  opacity: 0.7;
  border-radius: 4px;
  padding: 17px 19px;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  outline: none;
  border: none;
  width: 100%;
  color: #FFFFFF;
`

export const InputWithTitleWrapper = styled.div`
  flex-grow: ${(props: any) => props.size || 1};
`
export const InputTitle = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #F65261;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin: 30px 0 13px;
`
export const InputField = styled.input`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 57px;
  border: none;
  width: 100%;
  padding: 17px 19px;
  color: #FFFFFF;
`