import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AnnotationIcon as AnnotationIconRegular } from './annotation';
import { AnnotationIconBold } from './annotation-bold';
import { AnnotationIconFilled } from './annotation-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AnnotationIconRegular ref={ref} {...props} />;
  }
}));

AnnotationIcon.displayName = 'AnnotationIcon';

export { AnnotationIcon };
