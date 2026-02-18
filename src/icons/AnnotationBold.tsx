import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationBoldProps = Omit<IconBaseProps, 'children'>;

const AnnotationBold = memo(
  forwardRef<SVGSVGElement, AnnotationBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="annotation-bold" {...props}>
      <path fillRule="evenodd" d="M5 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-4.27a1 1 0 0 1 0-2h4.27c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 4 15.74 4 14.6 4h-3.2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C6 7.47 6 8.26 6 9.4v4.27a1 1 0 0 1-2 0V9.4q-.01-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q9.75 1.99 11.4 2z" />
        <path d="M13 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM16 7.5a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

AnnotationBold.displayName = 'AnnotationBold';

// Triple export pattern (lucide-react style)
export { AnnotationBold, AnnotationBold as AnnotationBoldIcon, AnnotationBold as SiAnnotationBold };
export default AnnotationBold;
export type { AnnotationBoldProps };
