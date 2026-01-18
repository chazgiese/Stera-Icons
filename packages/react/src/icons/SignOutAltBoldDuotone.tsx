import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignOutAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignOutAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 1c.87 0 1.5 0 2.04.14a4 4 0 0 1 2.82 2.82c.15.55.14 1.17.14 2.04a1 1 0 1 1-2 0c0-1 0-1.3-.07-1.52a2 2 0 0 0-1.41-1.41A7 7 0 0 0 16 3H8.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 6.8v10.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H16c1 0 1.3 0 1.52-.07a2 2 0 0 0 1.41-1.41A7 7 0 0 0 19 18a1 1 0 0 1 2 0c0 .87 0 1.5-.14 2.04a4 4 0 0 1-2.82 2.82c-.55.15-1.17.14-2.04.14H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1z" opacity={.4} />
        <path fill="currentColor" d="M14.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.29-3.3H8.5a1 1 0 0 1 0-2h9.09l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

SignOutAltBoldDuotone.displayName = 'SignOutAltBoldDuotone';

export { SignOutAltBoldDuotone };
export type { SignOutAltBoldDuotoneProps };
