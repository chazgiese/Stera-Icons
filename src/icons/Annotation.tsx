import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AnnotationRegular } from './AnnotationRegular.js';
import { AnnotationRegularDuotone } from './AnnotationRegularDuotone.js';
import { AnnotationBold } from './AnnotationBold.js';
import { AnnotationBoldDuotone } from './AnnotationBoldDuotone.js';
import { AnnotationFill } from './AnnotationFill.js';
import { AnnotationFillDuotone } from './AnnotationFillDuotone.js';

export interface AnnotationProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Annotation - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AnnotationRegular } from 'stera-icons/icons/AnnotationRegular';
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

// Triple export pattern (lucide-react style)
export { Annotation, Annotation as AnnotationIcon, Annotation as SiAnnotation };
export default Annotation;
