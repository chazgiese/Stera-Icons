import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrickWallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrickWallFillDuotone = memo(
  forwardRef<SVGSVGElement, BrickWallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-fill-duotone" {...props}>
      <path d="M11 14H2v-4h9zM15 8H9V4h6zM17.8 4q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.51.03 1.2h-5V4zM7 20h-.8q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q1.99 16.69 2 16h5zM22 16q0 .69-.03 1.2c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H17v-4z" opacity={0.4} />
        <path d="M15 20H9v-4h6zM22 14h-9v-4h9zM7 8H2q0-.69.03-1.2c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q5.4 3.99 6.2 4H7z" />
    </IconBase>
  ))
);

BrickWallFillDuotone.displayName = 'BrickWallFillDuotone';

// Triple export pattern (lucide-react style)
export { BrickWallFillDuotone, BrickWallFillDuotone as BrickWallFillDuotoneIcon, BrickWallFillDuotone as SiBrickWallFillDuotone };
export default BrickWallFillDuotone;
export type { BrickWallFillDuotoneProps };
