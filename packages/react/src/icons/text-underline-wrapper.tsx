import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextUnderlineIcon as TextUnderlineIconRegular } from './text-underline';
import { TextUnderlineIconBold } from './text-underline-bold';
import { TextUnderlineIconFilled } from './text-underline-filled';
import { TextUnderlineIconFilltone } from './text-underline-filltone';
import { TextUnderlineIconLinetone } from './text-underline-linetone';

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
    case 'filltone':
      return <TextUnderlineIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextUnderlineIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextUnderlineIconRegular ref={ref} {...props} />;
  }
}));

TextUnderlineIcon.displayName = 'TextUnderlineIcon';

export { TextUnderlineIcon };
