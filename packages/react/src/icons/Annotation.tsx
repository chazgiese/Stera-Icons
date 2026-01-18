import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AnnotationRegular } from './AnnotationRegular';
import { AnnotationRegularDuotone } from './AnnotationRegularDuotone';
import { AnnotationBold } from './AnnotationBold';
import { AnnotationBoldDuotone } from './AnnotationBoldDuotone';
import { AnnotationFill } from './AnnotationFill';
import { AnnotationFillDuotone } from './AnnotationFillDuotone';

export interface AnnotationProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Annotation with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AnnotationRegular } from 'stera-icons/AnnotationRegular';
 */
const Annotation = memo(forwardRef<SVGSVGElement, AnnotationProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AnnotationBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AnnotationBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AnnotationFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AnnotationFill ref={ref} {...rest} />;
  if (duotone) return <AnnotationRegularDuotone ref={ref} {...rest} />;
  return <AnnotationRegular ref={ref} {...rest} />;
}));

Annotation.displayName = 'Annotation';

export { Annotation };
