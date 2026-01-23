import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationFillProps = Omit<IconBaseProps, 'children'>;

const AnnotationFill = memo(
  forwardRef<SVGSVGElement, AnnotationFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="annotation-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H8.87A4 4 0 0 0 4 15.13V9.4q-.01-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q9.75 1.99 11.4 2zM10 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

AnnotationFill.displayName = 'AnnotationFill';

// Triple export pattern (lucide-react style)
export { AnnotationFill, AnnotationFill as AnnotationFillIcon, AnnotationFill as SiAnnotationFill };
export default AnnotationFill;
export type { AnnotationFillProps };
