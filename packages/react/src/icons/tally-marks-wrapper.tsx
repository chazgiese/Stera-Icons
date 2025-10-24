import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TallyMarksIcon as RegularTallyMarksIcon } from './tally-marks';
import { TallyMarksIconBold } from './tally-marks-bold';
import { TallyMarksIconFilled } from './tally-marks-filled';
import { TallyMarksIconFilltone } from './tally-marks-filltone';
import { TallyMarksIconLinetone } from './tally-marks-linetone';

export interface TallyMarksIconProps extends IconProps {
  variant?: IconVariant;
}

const TallyMarksIcon = memo(forwardRef<SVGSVGElement, TallyMarksIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TallyMarksIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TallyMarksIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TallyMarksIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TallyMarksIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTallyMarksIcon ref={ref} {...props} />;
  }
}));

TallyMarksIcon.displayName = 'TallyMarksIcon';

export { TallyMarksIcon };
