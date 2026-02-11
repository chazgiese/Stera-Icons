import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeSwordRegularDuotone = memo(
  forwardRef<SVGSVGElement, BladeSwordRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword-duotone" {...props}>
      <path d="M3.72 3.72a.8.8 0 0 1 .71-.2l3.46.87q.2.05.35.2l8.12 8.11-1.06 1.06L7.33 5.8l-2.05-.5.51 2.04 7.97 7.97-1.06 1.06L4.6 8.24a1 1 0 0 1-.17-.25l-.03-.1-.87-3.46a.8.8 0 0 1 .2-.71" opacity={.4} />
        <path d="M17.56 11.5a.75.75 0 0 1 1.06 1.06l-1.51 1.51v1.98l1.81 1.81 1.09.36q.21.08.37.24l.25.24c.37.38.37 1 0 1.37l-.56.56-.08.06a1 1 0 0 1-1.22 0l-.07-.06-.24-.25a1 1 0 0 1-.2-.27l-.04-.1-.36-1.08-1.81-1.82h-1.98l-1.5 1.5a.75.75 0 0 1-1.07-1.05z" />
    </IconBase>
  ))
);

BladeSwordRegularDuotone.displayName = 'BladeSwordRegularDuotone';

// Triple export pattern (lucide-react style)
export { BladeSwordRegularDuotone, BladeSwordRegularDuotone as BladeSwordRegularDuotoneIcon, BladeSwordRegularDuotone as SiBladeSwordRegularDuotone };
export default BladeSwordRegularDuotone;
export type { BladeSwordRegularDuotoneProps };
