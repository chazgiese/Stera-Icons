import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GradientRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GradientRegularDuotone = memo(
  forwardRef<SVGSVGElement, GradientRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-3.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.56 15.06a1.39 1.39 0 1 1 0 2.77 1.39 1.39 0 0 1 0-2.77M14.2 15.41a1.03 1.03 0 1 1 0 2.07 1.03 1.03 0 0 1 0-2.07M11.05 13.01a1.21 1.21 0 1 1 0 2.42 1.21 1.21 0 0 1 0-2.42M16.98 13.37a.86.86 0 1 1 0 1.7.86.86 0 0 1 0-1.7M7.56 10.61a1.39 1.39 0 1 1 0 2.78 1.39 1.39 0 0 1 0-2.78M14.2 10.97a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06M11.05 8.57a1.21 1.21 0 1 1 0 2.42 1.21 1.21 0 0 1 0-2.42M16.98 8.92a.86.86 0 1 1 0 1.71.86.86 0 0 1 0-1.7M7.56 6.17a1.39 1.39 0 1 1 0 2.78 1.39 1.39 0 0 1 0-2.78M14.2 6.52a1.03 1.03 0 1 1 0 2.07 1.03 1.03 0 0 1 0-2.07" />
    </IconBase>
  ))
);

GradientRegularDuotone.displayName = 'GradientRegularDuotone';

// Triple export pattern (lucide-react style)
export { GradientRegularDuotone, GradientRegularDuotone as GradientRegularDuotoneIcon, GradientRegularDuotone as SiGradientRegularDuotone };
export default GradientRegularDuotone;
export type { GradientRegularDuotoneProps };
