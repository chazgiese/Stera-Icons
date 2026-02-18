import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GradientRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GradientRegularDuotone = memo(
  forwardRef<SVGSVGElement, GradientRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient-duotone" {...props}>
      <path fillRule="evenodd" d="M13.3 2.75c1.25 0 2.23 0 3.02.06.8.07 1.46.2 2.06.51 1 .5 1.8 1.3 2.3 2.3q.43.89.5 2.06c.07.8.07 1.77.07 3.02v2.6c0 1.25 0 2.23-.06 3.02a5 5 0 0 1-.51 2.06c-.5 1-1.3 1.8-2.3 2.3q-.89.43-2.06.5c-.8.07-1.77.07-3.02.07h-2.6c-1.25 0-2.23 0-3.02-.06a5 5 0 0 1-2.06-.51c-1-.5-1.8-1.3-2.3-2.3a5 5 0 0 1-.5-2.06c-.07-.8-.07-1.77-.07-3.02v-2.6c0-1.25 0-2.23.06-3.02.07-.8.2-1.46.51-2.06.5-1 1.3-1.8 2.3-2.3a5 5 0 0 1 2.06-.5c.8-.07 1.77-.07 3.02-.07zm-2.6 1.5c-1.27 0-2.18 0-2.9.06-.7.06-1.14.17-1.5.35-.7.36-1.28.93-1.64 1.64-.18.36-.3.8-.35 1.5-.06.72-.06 1.63-.06 2.9v2.6c0 1.27 0 2.18.06 2.9.06.7.17 1.14.35 1.5.36.7.93 1.28 1.64 1.64.36.18.8.3 1.5.35.72.06 1.63.06 2.9.06h2.6c1.27 0 2.18 0 2.9-.06.7-.06 1.14-.17 1.5-.35.7-.36 1.28-.93 1.64-1.64.18-.36.3-.8.35-1.5.06-.72.06-1.63.06-2.9v-2.6c0-1.27 0-2.18-.06-2.9a4 4 0 0 0-.35-1.5 3.8 3.8 0 0 0-1.64-1.64c-.36-.18-.8-.3-1.5-.35-.72-.06-1.63-.06-2.9-.06z" clipRule="evenodd" opacity={.4} />
        <path d="M7.56 15.06a1.39 1.39 0 1 1 0 2.77 1.39 1.39 0 0 1 0-2.77M14.2 15.41a1.03 1.03 0 1 1 0 2.07 1.03 1.03 0 0 1 0-2.07M11.05 13.01a1.21 1.21 0 1 1 0 2.42 1.21 1.21 0 0 1 0-2.42M16.98 13.37a.86.86 0 1 1 0 1.7.86.86 0 0 1 0-1.7M7.56 10.61a1.39 1.39 0 1 1 0 2.78 1.39 1.39 0 0 1 0-2.78M14.2 10.97a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06M11.05 8.57a1.21 1.21 0 1 1 0 2.42 1.21 1.21 0 0 1 0-2.42M16.98 8.92a.86.86 0 1 1 0 1.71.86.86 0 0 1 0-1.7M7.56 6.17a1.39 1.39 0 1 1 0 2.78 1.39 1.39 0 0 1 0-2.78M14.2 6.52a1.03 1.03 0 1 1 0 2.07 1.03 1.03 0 0 1 0-2.07" />
    </IconBase>
  ))
);

GradientRegularDuotone.displayName = 'GradientRegularDuotone';

// Triple export pattern (lucide-react style)
export { GradientRegularDuotone, GradientRegularDuotone as GradientRegularDuotoneIcon, GradientRegularDuotone as SiGradientRegularDuotone };
export default GradientRegularDuotone;
export type { GradientRegularDuotoneProps };
