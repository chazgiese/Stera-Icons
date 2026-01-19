import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GradientRegularProps = Omit<IconBaseProps, 'children'>;

const GradientRegular = memo(
  forwardRef<SVGSVGElement, GradientRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient" {...props}>
      <path fill="currentColor" d="M7 15.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14.47 15.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2M10.93 13.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6M17.7 13.6a.9.9 0 1 1-1 1v-.2a.9.9 0 0 1 .9-.8zM7 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14.47 10.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2M10.93 8.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6M17.7 8.6a.9.9 0 1 1-1 1v-.2a.9.9 0 0 1 .9-.8zM7 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14.47 5.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2" />
        <path fill="currentColor" fillRule="evenodd" d="M14.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v5.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.4q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-5.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v5.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h5.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

GradientRegular.displayName = 'GradientRegular';

// Triple export pattern (lucide-react style)
export { GradientRegular, GradientRegular as GradientRegularIcon, GradientRegular as SiGradientRegular };
export type { GradientRegularProps };
