import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutFillDuotone = memo(
  forwardRef<SVGSVGElement, SignOutFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-out-fill-duotone" {...props}>
      <path d="M10.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11H8.5a1 1 0 0 0 0 2H16v3.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 17.43 1 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2z" opacity={.4} />
        <path d="M18.3 7.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 1 1-1.4-1.4l1.79-1.8H8.5a1 1 0 0 1 0-2h11.59l-1.8-1.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

SignOutFillDuotone.displayName = 'SignOutFillDuotone';

// Triple export pattern (lucide-react style)
export { SignOutFillDuotone, SignOutFillDuotone as SignOutFillDuotoneIcon, SignOutFillDuotone as SiSignOutFillDuotone };
export default SignOutFillDuotone;
export type { SignOutFillDuotoneProps };
