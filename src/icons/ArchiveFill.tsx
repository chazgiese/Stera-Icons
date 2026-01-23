import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveFillProps = Omit<IconBaseProps, 'children'>;

const ArchiveFill = memo(
  forwardRef<SVGSVGElement, ArchiveFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="archive-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.75 16.2q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.25h19.5zM9 12a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" />
        <path fill="currentColor" d="m21.2 2.25.39.01q.2 0 .48.13a1.3 1.3 0 0 1 .67 1.02l.01.39v2.4l-.01.39q0 .2-.13.48a1.3 1.3 0 0 1-1.02.67l-.39.01H2.8l-.39-.01q-.2 0-.48-.13a1.3 1.3 0 0 1-.67-1.02l-.01-.39V3.8l.01-.39q0-.2.13-.48a1.3 1.3 0 0 1 1.02-.67l.39-.01z" />
    </IconBase>
  ))
);

ArchiveFill.displayName = 'ArchiveFill';

// Triple export pattern (lucide-react style)
export { ArchiveFill, ArchiveFill as ArchiveFillIcon, ArchiveFill as SiArchiveFill };
export default ArchiveFill;
export type { ArchiveFillProps };
