import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchiveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchiveFillDuotone = memo(
  forwardRef<SVGSVGElement, ArchiveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.75 16.2q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.25h19.5zM9 12a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM21.2 2.25l.39.01q.2 0 .48.13a1.3 1.3 0 0 1 .67 1.02l.01.39v2.4l-.01.39q0 .2-.13.48a1.3 1.3 0 0 1-1.02.67l-.39.01H2.8l-.39-.01q-.2 0-.48-.13a1.3 1.3 0 0 1-.67-1.02l-.01-.39V3.8l.01-.39q0-.2.13-.48a1.3 1.3 0 0 1 1.02-.67l.39-.01z" />
    </IconBase>
  ))
);

ArchiveFillDuotone.displayName = 'ArchiveFillDuotone';

export { ArchiveFillDuotone };
export type { ArchiveFillDuotoneProps };
