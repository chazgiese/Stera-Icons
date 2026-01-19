import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignInFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignInFillDuotone = memo(
  forwardRef<SVGSVGElement, SignInFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-in-fill-duotone" {...props}>
      <path fill="currentColor" d="M16.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-4.4q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q6 17.43 6 16.2V13h7.59l-1.8 1.8a1 1 0 1 0 1.42 1.4l3.5-3.5a1 1 0 0 0 0-1.4l-3.5-3.5a1 1 0 1 0-1.42 1.4l1.8 1.8H6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q10.57 2 11.8 2z" opacity={.4} />
        <path fill="currentColor" d="M11.8 7.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 0 1-1.4-1.4l1.79-1.8H2a1 1 0 0 1 0-2h11.59l-1.8-1.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

SignInFillDuotone.displayName = 'SignInFillDuotone';

// Triple export pattern (lucide-react style)
export { SignInFillDuotone, SignInFillDuotone as SignInFillDuotoneIcon, SignInFillDuotone as SiSignInFillDuotone };
export type { SignInFillDuotoneProps };
