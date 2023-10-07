/** @format */

// 각각 사각
interface Props {
  name: string;
}
function PropsType1({ name }: Props) {
  return (
    <>
      <h2>Hello {name}</h2>
    </>
  );
}

interface Square1 {
  //   width: string;
  //   height: string;
  //   color: string;
  [key: string]: string;
}
const PropsType2 = (props: Square1) => {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };
  console.log(props);
  return <div style={divStyle}></div>;
};

interface Square2 {
  width: number;
  height: number;
  text: string;
  color?: string;
}
const PropsType3 = (props: Square2) => {
  const { width, height, color, text } = props;
  const divStyle: object = {
    width: `${width}px`,
    height: `${height}px`,
    // color props는 들어올 수도 있고 안들어올 수도 있기 때문에(optional) 삼항연산자로 처리해 줘따
    backgroundColor: `${color ? color : 'pink'}`,
    lineHeight: `${height}px`,
    textAlign: 'center', // divStyle 을 object type으로 설정하지 않으면 오류남 ㅜ
  };
  return <div style={divStyle}>{text}</div>;
};

export { PropsType1, PropsType2, PropsType3 };
