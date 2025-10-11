import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LabelIcon as LabelIconRegular } from './label';
import { LabelIconBold } from './label-bold';
import { LabelIconFilled } from './label-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface LabelIconProps extends IconProps {
  variant?: IconVariant;
}

const LabelIcon = memo(forwardRef<SVGSVGElement, LabelIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LabelIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LabelIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <LabelIconRegular ref={ref} {...props} />;
  }
}));

LabelIcon.displayName = 'LabelIcon';

export { LabelIcon };
