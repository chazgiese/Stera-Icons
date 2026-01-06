import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TallyMarksIcon as RegularTallyMarksIcon } from './tally-marks';
import { TallyMarksIconDuotone as TallyMarksIconDuotone } from './tally-marks-duotone';
import { TallyMarksIconBold as TallyMarksIconBold } from './tally-marks-bold';
import { TallyMarksIconBoldDuotone as TallyMarksIconBoldDuotone } from './tally-marks-bold-duotone';
import { TallyMarksIconFill as TallyMarksIconFill } from './tally-marks-fill';
import { TallyMarksIconFillDuotone as TallyMarksIconFillDuotone } from './tally-marks-fill-duotone';

export interface TallyMarksIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TallyMarksIcon = memo(forwardRef<SVGSVGElement, TallyMarksIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TallyMarksIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TallyMarksIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TallyMarksIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TallyMarksIconFill ref={ref} {...props} />;
  if (duotone) return <TallyMarksIconDuotone ref={ref} {...props} />;
  return <RegularTallyMarksIcon ref={ref} {...props} />;
}));

TallyMarksIcon.displayName = 'TallyMarksIcon';

export { TallyMarksIcon };
