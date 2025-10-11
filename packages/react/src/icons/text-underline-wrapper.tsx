import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextUnderlineIcon as TextUnderlineIconRegular } from './text-underline';
import { TextUnderlineIconBold } from './text-underline-bold';
import { TextUnderlineIconFilled } from './text-underline-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TextUnderlineIconProps extends IconProps {
  variant?: IconVariant;
}

const TextUnderlineIcon = memo(forwardRef<SVGSVGElement, TextUnderlineIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextUnderlineIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextUnderlineIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextUnderlineIconRegular ref={ref} {...props} />;
  }
}));

TextUnderlineIcon.displayName = 'TextUnderlineIcon';

export { TextUnderlineIcon };
