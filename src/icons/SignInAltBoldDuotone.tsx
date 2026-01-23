import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignInAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignInAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignInAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-in-alt-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-.76a1 1 0 0 1 2 0v.76c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V6.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 3 16.06 3 15.2 3H8.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 6.8v.76a1 1 0 0 1-2 0V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1z" opacity={.4} />
        <path fill="currentColor" d="M9.8 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.29-3.3H3.5a1 1 0 0 1 0-2h9.59l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

SignInAltBoldDuotone.displayName = 'SignInAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { SignInAltBoldDuotone, SignInAltBoldDuotone as SignInAltBoldDuotoneIcon, SignInAltBoldDuotone as SiSignInAltBoldDuotone };
export default SignInAltBoldDuotone;
export type { SignInAltBoldDuotoneProps };
