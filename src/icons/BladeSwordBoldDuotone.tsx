import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeSwordBoldDuotone = memo(
  forwardRef<SVGSVGElement, BladeSwordBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword-bold-duotone" {...props}>
      <path d="M3.54 3.54a1 1 0 0 1 .95-.26l3.46.86a1 1 0 0 1 .47.27l7.94 7.94-1.42 1.41L7.2 6.02l-1.58-.4.4 1.58 7.74 7.74-1.41 1.42-7.94-7.94a1 1 0 0 1-.22-.34l-.05-.13-.86-3.46a1 1 0 0 1 .26-.95" opacity={.4} />
        <path d="M17.38 11.33a1 1 0 1 1 1.41 1.41l-1.43 1.44v1.76l1.7 1.7 1.03.35q.27.09.47.3l.24.24c.48.47.48 1.24 0 1.72l-.56.55-.09.09c-.44.36-1.09.36-1.53 0l-.1-.09-.24-.24q-.15-.16-.24-.34l-.05-.13-.34-1.03-1.7-1.7h-1.77l-1.44 1.44a1 1 0 0 1-1.41-1.42z" />
    </IconBase>
  ))
);

BladeSwordBoldDuotone.displayName = 'BladeSwordBoldDuotone';

// Triple export pattern (lucide-react style)
export { BladeSwordBoldDuotone, BladeSwordBoldDuotone as BladeSwordBoldDuotoneIcon, BladeSwordBoldDuotone as SiBladeSwordBoldDuotone };
export default BladeSwordBoldDuotone;
export type { BladeSwordBoldDuotoneProps };
