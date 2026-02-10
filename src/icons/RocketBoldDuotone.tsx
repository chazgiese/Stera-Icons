import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RocketBoldDuotone = memo(
  forwardRef<SVGSVGElement, RocketBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rocket-bold-duotone" {...props}>
      <path d="M6.08 9.5q-.1 1.25.05 2.37l.06.36-1.13 1.12.7 4.5 1.9-1.19.48.86.02.02v.01h.01l.15.18.02.02.1.08.09.05.02.01.07.04.04.01.07.02.05.01.08.02h.04L9 18h.29l-3.76 2.35a1 1 0 0 1-1.52-.7l-1-6.5a1 1 0 0 1 .28-.86zM20.7 12.3a1 1 0 0 1 .29.85l-1 6.5a1 1 0 0 1-1.52.7L14.71 18h.41l.02-.01.08-.02h.04l.1-.04a1 1 0 0 0 .3-.19h.01l.16-.18v-.01h.01l.02-.03.25-.42.23-.44 1.9 1.19.7-4.5-1.13-1.12.06-.36q.15-1.12.05-2.37zM12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7" opacity={0.4} />
        <path fill="currentColor" d="M13.5 19a1 1 0 0 1 1 1c0 .37-.13.75-.3 1.07-.47.96-1.34 1.55-2.2 2.13-.86-.58-1.73-1.17-2.2-2.13-.17-.32-.3-.7-.3-1.07a1 1 0 0 1 1-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M11.58 1.1a1 1 0 0 1 .97.07c2.4 1.6 3.85 3.43 4.64 5.32.78 1.88.88 3.75.68 5.38a14 14 0 0 1-2.01 5.65l-.02.02v.01h-.01l-.16.19a1 1 0 0 1-.3.19h-.01l-.1.03-.04.01-.08.02h-.02L15 18H8.88l-.02-.01-.08-.02h-.05l-.07-.03-.04-.01-.07-.04h-.02l-.09-.06-.1-.08-.02-.02-.06-.06-.02-.03-.07-.08v-.01h-.01l-.02-.03-.25-.42a14 14 0 0 1-1.76-5.23c-.2-1.63-.1-3.5.68-5.38a12 12 0 0 1 4.64-5.32zM12 3.22a9.7 9.7 0 0 0-3.34 4.04 8.5 8.5 0 0 0-.54 4.37A12 12 0 0 0 9.57 16h4.86a12 12 0 0 0 1.45-4.37 8.5 8.5 0 0 0-.54-4.37A9.7 9.7 0 0 0 12 3.22" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketBoldDuotone.displayName = 'RocketBoldDuotone';

// Triple export pattern (lucide-react style)
export { RocketBoldDuotone, RocketBoldDuotone as RocketBoldDuotoneIcon, RocketBoldDuotone as SiRocketBoldDuotone };
export default RocketBoldDuotone;
export type { RocketBoldDuotoneProps };
