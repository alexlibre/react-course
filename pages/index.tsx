import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';
import { withLayout } from '../Layout/Layout';

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>Text</Htag>
			<Htag tag='h2'>Text</Htag>
			<Htag tag='h3'>Text</Htag>
			<Button appearance='primary' arrow='right'>
				Button
			</Button>
			<Button appearance='ghost'>Button</Button>
			<Button appearance='ghost' arrow='right'>
				Button
			</Button>
			<P size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, dicta.</P>
			<P>Ducimus pariatur accusantium quis aliquam maxime tempore explicabo, sed consequuntur porro quo.</P>
			<P size='l'>Numquam beatae saepe laudantium, earum rerum expedita amet nihil minima.</P>
			<Tag color='gray'>Gray</Tag>
			<Tag color='red'>hh.ru</Tag>
			<Tag color='red' href='https://hh.ru'>
				hh.ru
			</Tag>
			<Tag color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Tag color='primary' size='s'>
				Primary
			</Tag>
			<Tag>Ghost</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
		</>
	);
}

export default withLayout(Home);
