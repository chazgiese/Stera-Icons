import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HammerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HammerFillDuotone = memo(
  forwardRef<SVGSVGElement, HammerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hammer-fill-duotone" {...props}>
      <path fill="currentColor" d="M9 9a1 1 0 0 0 1 1h.96l-.36 8.54a1.4 1.4 0 1 0 2.8 0L13.04 10h1.46a1 1 0 0 0 .54-.16l.36 8.62a3.4 3.4 0 1 1-6.8 0z" opacity={.4} />
        <path fill="currentColor" d="M14.5 2a1 1 0 0 1 .7.3l1 .98 1.35-.67.1-.05A1 1 0 0 1 18 2.5h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-.45-.1l-1.35-.68-1 .99a1 1 0 0 1-.7.29H10a1 1 0 0 1-1-1c0-.12-.04-.24-.24-.38a2 2 0 0 0-1.06-.3 3.6 3.6 0 0 0-2.92 1.3 1 1 0 0 1-1.76-.82C4.1 3.4 7.47 2 9 2z" />
    </IconBase>
  ))
);

HammerFillDuotone.displayName = 'HammerFillDuotone';

// Triple export pattern (lucide-react style)
export { HammerFillDuotone, HammerFillDuotone as HammerFillDuotoneIcon, HammerFillDuotone as SiHammerFillDuotone };
export type { HammerFillDuotoneProps };
