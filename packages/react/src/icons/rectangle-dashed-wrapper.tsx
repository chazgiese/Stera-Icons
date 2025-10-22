import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RectangleDashedIcon as RectangleDashedIconRegular } from './rectangle-dashed';
import { RectangleDashedIconBold } from './rectangle-dashed-bold';
import { RectangleDashedIconFilled } from './rectangle-dashed-filled';
import { RectangleDashedIconFilltone } from './rectangle-dashed-filltone';
import { RectangleDashedIconLinetone } from './rectangle-dashed-linetone';

export interface RectangleDashedIconProps extends IconProps {
  variant?: IconVariant;
}

const RectangleDashedIcon = memo(forwardRef<SVGSVGElement, RectangleDashedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RectangleDashedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RectangleDashedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RectangleDashedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RectangleDashedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RectangleDashedIconRegular ref={ref} {...props} />;
  }
}));

RectangleDashedIcon.displayName = 'RectangleDashedIcon';

export { RectangleDashedIcon };
