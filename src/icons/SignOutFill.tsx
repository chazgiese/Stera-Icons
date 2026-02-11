import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutFillProps = Omit<IconBaseProps, 'children'>;

const SignOutFill = memo(
  forwardRef<SVGSVGElement, SignOutFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-out-fill" {...props}>
      <path d="M10.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11H8.5a1 1 0 1 0 0 2H16v-2h4.09l-1.8-1.8a1 1 0 1 1 1.42-1.4l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 1 1-1.42-1.4l1.8-1.8H16v3.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 17.43 1 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2z" />
    </IconBase>
  ))
);

SignOutFill.displayName = 'SignOutFill';

// Triple export pattern (lucide-react style)
export { SignOutFill, SignOutFill as SignOutFillIcon, SignOutFill as SiSignOutFill };
export default SignOutFill;
export type { SignOutFillProps };
