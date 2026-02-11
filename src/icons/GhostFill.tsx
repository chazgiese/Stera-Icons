import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostFillProps = Omit<IconBaseProps, 'children'>;

const GhostFill = memo(
  forwardRef<SVGSVGElement, GhostFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="ghost-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a9 9 0 0 1 9 9v10a1 1 0 0 1-1.55.83l-2.4-1.6-1.93 1.55a1 1 0 0 1-1.24 0L12 20.28l-1.87 1.5a1 1 0 0 1-1.26 0l-1.92-1.54-2.4 1.6A1 1 0 0 1 3 21V11a9 9 0 0 1 9-9M9 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

GhostFill.displayName = 'GhostFill';

// Triple export pattern (lucide-react style)
export { GhostFill, GhostFill as GhostFillIcon, GhostFill as SiGhostFill };
export default GhostFill;
export type { GhostFillProps };
