import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrickWallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrickWallRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrickWallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 4.25q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v6q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H7q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7V9q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM7 5.75c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7-.03.39-.03.88-.03 1.59v6c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h10c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59V9c0-.71 0-1.2-.03-1.58a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.75 5.75v3.17h6.5V5.75h1.5v3.17h3.5v1.5h-7.5v3.16h7.5v1.5h-3.5v3.17h-1.5v-3.17h-6.5v3.17h-1.5v-3.17h-3.5v-1.5h7.5v-3.16h-7.5v-1.5h3.5V5.75z" />
    </IconBase>
  ))
);

BrickWallRegularDuotone.displayName = 'BrickWallRegularDuotone';

// Triple export pattern (lucide-react style)
export { BrickWallRegularDuotone, BrickWallRegularDuotone as BrickWallRegularDuotoneIcon, BrickWallRegularDuotone as SiBrickWallRegularDuotone };
export default BrickWallRegularDuotone;
export type { BrickWallRegularDuotoneProps };
