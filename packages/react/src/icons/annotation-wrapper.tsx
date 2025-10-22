import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AnnotationIcon as AnnotationIconRegular } from './annotation';
import { AnnotationIconBold } from './annotation-bold';
import { AnnotationIconFilled } from './annotation-filled';
import { AnnotationIconFilltone } from './annotation-filltone';
import { AnnotationIconLinetone } from './annotation-linetone';

export interface AnnotationIconProps extends IconProps {
  variant?: IconVariant;
}

const AnnotationIcon = memo(forwardRef<SVGSVGElement, AnnotationIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AnnotationIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AnnotationIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AnnotationIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AnnotationIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AnnotationIconRegular ref={ref} {...props} />;
  }
}));

AnnotationIcon.displayName = 'AnnotationIcon';

export { AnnotationIcon };
