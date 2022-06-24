import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Htag tag='h2'>Text</Htag>
      <Htag tag='h3'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <P size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, dicta.</P>
      <P>Ducimus pariatur accusantium quis aliquam maxime tempore explicabo, sed consequuntur porro quo.</P>
      <P size='l'>Numquam beatae saepe laudantium, earum rerum expedita amet nihil minima.</P>
      <Tag color='gray'>Gray</Tag>
      <Tag color='red'>Red</Tag>
      <Tag color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Tag>Ghost</Tag>
    </>
  );
}
