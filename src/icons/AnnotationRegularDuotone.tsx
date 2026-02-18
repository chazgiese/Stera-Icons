import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AnnotationRegularDuotone = memo(
  forwardRef<SVGSVGElement, AnnotationRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="annotation-duotone" {...props}>
      <path d="M14.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-4.27a.75.75 0 0 1 0-1.5h4.27c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05h-3.2c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v4.27a.75.75 0 0 1-1.5 0V9.4q-.01-1.64.06-2.69t.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" opacity={.4} />
        <path fillRule="evenodd" d="M5 16.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path d="M13 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM16 7.75a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

AnnotationRegularDuotone.displayName = 'AnnotationRegularDuotone';

// Triple export pattern (lucide-react style)
export { AnnotationRegularDuotone, AnnotationRegularDuotone as AnnotationRegularDuotoneIcon, AnnotationRegularDuotone as SiAnnotationRegularDuotone };
export default AnnotationRegularDuotone;
export type { AnnotationRegularDuotoneProps };
