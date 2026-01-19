import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrickWallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrickWallBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrickWallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" clipRule="evenodd" />
        <path fill="currentColor" d="M8 5v3.33h8V5h2v3.33h3v2h-8v3.34h8v2h-3V19h-2v-3.33H8V19H6v-3.33H3v-2h8v-3.34H3v-2h3V5z" opacity={.4} />
    </IconBase>
  ))
);

BrickWallBoldDuotone.displayName = 'BrickWallBoldDuotone';

// Triple export pattern (lucide-react style)
export { BrickWallBoldDuotone, BrickWallBoldDuotone as BrickWallBoldDuotoneIcon, BrickWallBoldDuotone as SiBrickWallBoldDuotone };
export default BrickWallBoldDuotone;
export type { BrickWallBoldDuotoneProps };
