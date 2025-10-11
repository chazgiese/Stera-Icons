import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignCenterIcon as TextAlignCenterIconRegular } from './text-align-center';
import { TextAlignCenterIconBold } from './text-align-center-bold';
import { TextAlignCenterIconFilled } from './text-align-center-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TextAlignCenterIconProps extends IconProps {
  variant?: IconVariant;
}

const TextAlignCenterIcon = memo(forwardRef<SVGSVGElement, TextAlignCenterIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextAlignCenterIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextAlignCenterIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextAlignCenterIconRegular ref={ref} {...props} />;
  }
}));

TextAlignCenterIcon.displayName = 'TextAlignCenterIcon';

export { TextAlignCenterIcon };
