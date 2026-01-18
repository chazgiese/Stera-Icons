import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrickWallRegularProps = Omit<IconBaseProps, 'children'>;

const BrickWallRegular = memo(
  forwardRef<SVGSVGElement, BrickWallRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 3.25A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25zM2.75 18c0 .69.56 1.25 1.25 1.25h2.25v-3.83h-3.5zm15 1.25H20c.69 0 1.25-.56 1.25-1.25v-2.58h-3.5zm-10 0h8.5v-3.83h-8.5zm-5-5.33h8.5v-3.84h-8.5zm10 0h8.5v-3.84h-8.5zM4 4.75c-.69 0-1.25.56-1.25 1.25v2.58h3.5V4.75zm3.75 3.83h8.5V4.75h-8.5zm10 0h3.5V6c0-.69-.56-1.25-1.25-1.25h-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrickWallRegular.displayName = 'BrickWallRegular';

// Triple export pattern (lucide-react style)
export { BrickWallRegular, BrickWallRegular as BrickWallRegularIcon, BrickWallRegular as SiBrickWallRegular };
export type { BrickWallRegularProps };
