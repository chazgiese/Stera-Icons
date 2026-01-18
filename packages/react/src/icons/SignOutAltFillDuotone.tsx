import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignOutAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutAltFillDuotone = memo(
  forwardRef<SVGSVGElement, SignOutAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zm.5 5.3a1 1 0 1 0-1.4 1.4l3.29 3.3H8.5a1 1 0 0 0 0 2h9.09l-3.3 3.3a1 1 0 1 0 1.42 1.4l5-5a1 1 0 0 0 0-1.4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.29-3.3H8.5a1 1 0 0 1 0-2h9.09l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

SignOutAltFillDuotone.displayName = 'SignOutAltFillDuotone';

// Triple export pattern (lucide-react style)
export { SignOutAltFillDuotone, SignOutAltFillDuotone as SignOutAltFillDuotoneIcon, SignOutAltFillDuotone as SiSignOutAltFillDuotone };
export type { SignOutAltFillDuotoneProps };
