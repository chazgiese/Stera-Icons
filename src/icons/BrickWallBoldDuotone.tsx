import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrickWallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrickWallBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrickWallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M17 4q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v6q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H7q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q1.99 16.02 2 15V9q-.01-1.03.04-1.72c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34Q5.98 3.99 7 4zM7 6c-.72 0-1.2 0-1.56.03s-.52.08-.62.13a1.5 1.5 0 0 0-.66.66c-.05.1-.1.26-.13.62C4 7.8 4 8.28 4 9v6c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13.37.03.84.03 1.56.03h10c.72 0 1.2 0 1.56-.03s.52-.08.62-.13q.43-.23.66-.66c.05-.1.1-.26.13-.62.03-.37.03-.84.03-1.56V9c0-.72 0-1.2-.03-1.56a2 2 0 0 0-.13-.62 1.5 1.5 0 0 0-.66-.66c-.1-.05-.26-.1-.62-.13C18.2 6 17.72 6 17 6z" clipRule="evenodd" opacity={.4} />
        <path d="M9 6v2.67h6V6h2v2.67h3v2h-7v2.66h7v2h-3V18h-2v-2.67H9V18H7v-2.67H4v-2h7v-2.66H4v-2h3V6z" />
    </IconBase>
  ))
);

BrickWallBoldDuotone.displayName = 'BrickWallBoldDuotone';

// Triple export pattern (lucide-react style)
export { BrickWallBoldDuotone, BrickWallBoldDuotone as BrickWallBoldDuotoneIcon, BrickWallBoldDuotone as SiBrickWallBoldDuotone };
export default BrickWallBoldDuotone;
export type { BrickWallBoldDuotoneProps };
