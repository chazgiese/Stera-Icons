import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignOutBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignOutBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m11.33 2 .92.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V8a1 1 0 1 1-2 0v-.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18l-.8-.04H6.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 7.8v8.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h3.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V16a1 1 0 1 1 2 0v.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 17.43 1 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2h4.53" opacity={.4} />
        <path fill="currentColor" d="M18.3 7.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 0 1-1.4-1.4l1.79-1.8H8.5a1 1 0 0 1 0-2h11.59l-1.8-1.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

SignOutBoldDuotone.displayName = 'SignOutBoldDuotone';

// Triple export pattern (lucide-react style)
export { SignOutBoldDuotone, SignOutBoldDuotone as SignOutBoldDuotoneIcon, SignOutBoldDuotone as SiSignOutBoldDuotone };
export type { SignOutBoldDuotoneProps };
