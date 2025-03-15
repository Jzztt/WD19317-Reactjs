
interface TitleProps{
  name: string,
}
const Title = (props:TitleProps) => {
  console.log(props);
  return (
    <div>{props.name}</div>
  )
}

export default Title