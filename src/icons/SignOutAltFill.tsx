import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutAltFillProps = Omit<IconBaseProps, 'children'>;

const SignOutAltFill = memo(
  forwardRef<SVGSVGElement, SignOutAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-out-alt-fill" {...props}>
      <path fill="currentColor" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.29l-4.8-4.8a1 1 0 1 0-1.4 1.42L18.08 11H8.5a1 1 0 1 0 0 2h9.59l-3.3 3.3a1 1 0 1 0 1.42 1.4L21 12.92v4.29q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1z" />
    </IconBase>
  ))
);

SignOutAltFill.displayName = 'SignOutAltFill';

// Triple export pattern (lucide-react style)
export { SignOutAltFill, SignOutAltFill as SignOutAltFillIcon, SignOutAltFill as SiSignOutAltFill };
export default SignOutAltFill;
export type { SignOutAltFillProps };
