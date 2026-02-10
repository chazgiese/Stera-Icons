import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrickWallRegularProps = Omit<IconBaseProps, 'children'>;

const BrickWallRegular = memo(
  forwardRef<SVGSVGElement, BrickWallRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 4.25q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v6q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H7q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7V9q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM3.75 15.08c0 .67 0 1.14.03 1.5s.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h.25v-3.17zm5 0v3.17h6.5v-3.17zm8 0v3.17H17c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.37.03-.84.03-1.5zm-13-1.5h7.5v-3.16h-7.5zm9 0h7.5v-3.16h-7.5zM7 5.75c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7-.03.37-.03.84-.03 1.5h3.5V5.76zm1.75 3.17h6.5V5.75h-6.5zm8 0h3.5c0-.67 0-1.14-.03-1.5a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03h-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrickWallRegular.displayName = 'BrickWallRegular';

// Triple export pattern (lucide-react style)
export { BrickWallRegular, BrickWallRegular as BrickWallRegularIcon, BrickWallRegular as SiBrickWallRegular };
export default BrickWallRegular;
export type { BrickWallRegularProps };
