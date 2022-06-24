import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((rating: JSX.Element, i: number) => {
			return <StarIcon className={cn(styles.star, { [styles.filled]: i < currentRating })} />;
		});
		setRatingArray(updatedArray);
	};
	return (
		<div className={cn(styles.rating)} {...props}>
			{ratingArray.map((rating, i) => {
				return (
					<span className={styles.item} key={i}>
						{rating}
					</span>
				);
			})}
		</div>
	);
};
