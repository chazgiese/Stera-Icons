import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrickWallBoldProps = Omit<IconBaseProps, 'children'>;

const BrickWallBold = memo(
  forwardRef<SVGSVGElement, BrickWallBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM3 18a1 1 0 0 0 1 1h2v-3.33H3zm15 1h2a1 1 0 0 0 1-1v-2.33h-3zM8 19h8v-3.33H8zm-5-5.33h8v-3.34H3zm10 0h8v-3.34h-8zM4 5a1 1 0 0 0-1 1v2.33h3V5zm4 3.33h8V5H8zm10 0h3V6a1 1 0 0 0-1-1h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrickWallBold.displayName = 'BrickWallBold';

// Triple export pattern (lucide-react style)
export { BrickWallBold, BrickWallBold as BrickWallBoldIcon, BrickWallBold as SiBrickWallBold };
export type { BrickWallBoldProps };
