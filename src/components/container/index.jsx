import { Container } from "./style";

function ContainerInfo({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
export default ContainerInfo;
