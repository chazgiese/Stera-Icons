import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeSwordBoldDuotone = memo(
  forwardRef<SVGSVGElement, BladeSwordBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword-bold-duotone" {...props}>
      <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 .94-.27l4 1a1 1 0 0 1 .47.26L17 12.6l-1.41 1.4-9.1-9.09-2.12-.53.53 2.12 9.1 9.1L12.59 17l-9.3-9.3a1 1 0 0 1-.22-.33l-.04-.13-1-4a1 1 0 0 1 .26-.95" opacity={.4} />
        <path fill="currentColor" d="M18.3 11.3a1 1 0 1 1 1.4 1.4L18 14.42v2.18l2.04 2.04 1.22.4q.28.1.49.3l.28.29c.49.48.49 1.28 0 1.76l-.65.65c-.45.46-1.18.49-1.67.09l-.1-.09-.27-.28q-.16-.15-.25-.36l-.06-.13-.4-1.22L16.59 18H14.4l-1.7 1.7a1 1 0 0 1-1.42-1.4z" />
    </IconBase>
  ))
);

BladeSwordBoldDuotone.displayName = 'BladeSwordBoldDuotone';

// Triple export pattern (lucide-react style)
export { BladeSwordBoldDuotone, BladeSwordBoldDuotone as BladeSwordBoldDuotoneIcon, BladeSwordBoldDuotone as SiBladeSwordBoldDuotone };
export default BladeSwordBoldDuotone;
export type { BladeSwordBoldDuotoneProps };
