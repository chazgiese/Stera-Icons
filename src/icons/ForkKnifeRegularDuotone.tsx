import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForkKnifeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ForkKnifeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="fork-knife-duotone" {...props}>
      <path d="M19.25 3.98c-1.6.5-2.62 1.25-3.29 2.54-.8 1.52-1.17 3.88-1.2 7.73h1.49v1.5H14a.75.75 0 0 1-.75-.75c0-4.3.35-7.2 1.38-9.17 1.08-2.06 2.82-3 5.2-3.56a.75.75 0 0 1 .92.73v11.25h-1.5zM10.69 9.3l-1.18 2.74q-.26.61-.26 1.28v6.18a2.25 2.25 0 0 1-4.5 0v-6.18q0-.66-.26-1.28L3.3 9.3c.12.26.38.45.69.45h1.14l.73 1.7q.38.9.38 1.87v6.18a.75.75 0 0 0 1.5 0v-6.18q0-.97.38-1.87l.73-1.7H10c.3 0 .57-.19.69-.45" opacity={0.4} />
        <path fillRule="evenodd" d="M20.75 19.5a2.25 2.25 0 0 1-4.5 0v-5.25h4.5zm-3 0a.75.75 0 0 0 1.5 0v-3.75h-1.5z" clipRule="evenodd" />
        <path d="M10 2.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75H4A.75.75 0 0 1 3.25 9V3a.75.75 0 0 1 1.5 0v5.25h1.5V3.5a.75.75 0 0 1 1.5 0v4.75h1.5V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ForkKnifeRegularDuotone.displayName = 'ForkKnifeRegularDuotone';

// Triple export pattern (lucide-react style)
export { ForkKnifeRegularDuotone, ForkKnifeRegularDuotone as ForkKnifeRegularDuotoneIcon, ForkKnifeRegularDuotone as SiForkKnifeRegularDuotone };
export default ForkKnifeRegularDuotone;
export type { ForkKnifeRegularDuotoneProps };
