import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrickWallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrickWallRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrickWallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-duotone" {...props}>
      <path fill="currentColor" d="M7.75 4.75v3.83h8.5V4.75h1.5v3.83h3.5v1.5h-8.5v3.84h8.5v1.5h-3.5v3.83h-1.5v-3.83h-8.5v3.83h-1.5v-3.83h-3.5v-1.5h8.5v-3.84h-8.5v-1.5h3.5V4.75z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20 3.25A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrickWallRegularDuotone.displayName = 'BrickWallRegularDuotone';

// Triple export pattern (lucide-react style)
export { BrickWallRegularDuotone, BrickWallRegularDuotone as BrickWallRegularDuotoneIcon, BrickWallRegularDuotone as SiBrickWallRegularDuotone };
export default BrickWallRegularDuotone;
export type { BrickWallRegularDuotoneProps };
