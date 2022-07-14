import { GradeProps } from './Grade.props';
import styles from './Grade.module.css';
import cn from 'classnames';
import GradeEmpty from './grade-empty.svg';
import GradeFill from './grade-fill.svg';

export const Grade = ({ value = 1, className, ...props }: GradeProps): JSX.Element => {

    const renderSwitch = (value) => {
        switch (value) {
            case 2:
                return (<><GradeFill /><GradeEmpty /><GradeEmpty /></>);
                break;
            case 3:
                return (<><GradeFill /><GradeFill /><GradeFill /></>);
                break;
            default:
                return (<><GradeFill /><GradeEmpty /><GradeEmpty /></>);
                break;
        }
    }

    return (
        <div
            className={cn(styles.grade, className)}
            {...props}
        >
            {renderSwitch(value)}
        </div>

    );
};
