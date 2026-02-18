import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AnnotationFillDuotone = memo(
  forwardRef<SVGSVGElement, AnnotationFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="annotation-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H7.64a2.75 2.75 0 0 0-3.39-3.4V9.4q-.01-1.64.06-2.69t.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zM10 11.13a.88.88 0 0 0 0 1.74h3a.88.88 0 0 0 0-1.74zm0-3.5a.88.88 0 0 0 0 1.75h6a.88.88 0 0 0 0-1.76z" clipRule="evenodd" opacity={.4} />
        <path d="M5 16.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M13 11.13a.88.88 0 0 1 0 1.74h-3a.88.88 0 0 1 0-1.74zM16 7.63a.88.88 0 0 1 0 1.75h-6a.87.87 0 1 1 0-1.76z" />
    </IconBase>
  ))
);

AnnotationFillDuotone.displayName = 'AnnotationFillDuotone';

// Triple export pattern (lucide-react style)
export { AnnotationFillDuotone, AnnotationFillDuotone as AnnotationFillDuotoneIcon, AnnotationFillDuotone as SiAnnotationFillDuotone };
export default AnnotationFillDuotone;
export type { AnnotationFillDuotoneProps };
