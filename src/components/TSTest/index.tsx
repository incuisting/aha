import * as React from 'react';

interface IProps {
  text: string;
}
export default function TSTest(props: IProps) {
  const { text } = props;
  return <div>{text}</div>;
}
