import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AnnotationIcon as RegularAnnotationIcon } from './annotation';
import { AnnotationIconDuotone as AnnotationIconDuotone } from './annotation-duotone';
import { AnnotationIconBold as AnnotationIconBold } from './annotation-bold';
import { AnnotationIconBoldDuotone as AnnotationIconBoldDuotone } from './annotation-bold-duotone';
import { AnnotationIconFill as AnnotationIconFill } from './annotation-fill';
import { AnnotationIconFillDuotone as AnnotationIconFillDuotone } from './annotation-fill-duotone';

export interface AnnotationIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AnnotationIcon = memo(forwardRef<SVGSVGElement, AnnotationIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AnnotationIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AnnotationIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AnnotationIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AnnotationIconFill ref={ref} {...props} />;
  if (duotone) return <AnnotationIconDuotone ref={ref} {...props} />;
  return <RegularAnnotationIcon ref={ref} {...props} />;
}));

AnnotationIcon.displayName = 'AnnotationIcon';

export { AnnotationIcon };
