import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextAlignCenterIcon as RegularTextAlignCenterIcon } from './text-align-center';
import { TextAlignCenterIconBold } from './text-align-center-bold';
import { TextAlignCenterIconFilled } from './text-align-center-filled';
import { TextAlignCenterIconFilltone } from './text-align-center-filltone';
import { TextAlignCenterIconLinetone } from './text-align-center-linetone';

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
    case 'filltone':
      return <TextAlignCenterIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextAlignCenterIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTextAlignCenterIcon ref={ref} {...props} />;
  }
}));

TextAlignCenterIcon.displayName = 'TextAlignCenterIcon';

export { TextAlignCenterIcon };
