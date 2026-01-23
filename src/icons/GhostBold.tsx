import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostBoldProps = Omit<IconBaseProps, 'children'>;

const GhostBold = memo(
  forwardRef<SVGSVGElement, GhostBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="ghost-bold" {...props}>
      <path fill="currentColor" d="M9 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a9 9 0 0 1 9 9v12a1 1 0 0 1-1.55.84l-2.4-1.6-1.93 1.54a1 1 0 0 1-1.24 0L12 21.28l-1.87 1.5a1 1 0 0 1-1.26 0l-1.92-1.54-2.4 1.6A1 1 0 0 1 3 22V10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7v10.13l1.45-.96.14-.08a1 1 0 0 1 1.04.13l1.87 1.5 1.88-1.5.14-.1a1 1 0 0 1 1.1.1l1.88 1.5 1.88-1.5.13-.1a1 1 0 0 1 1.04.05l1.45.96V10a7 7 0 0 0-7-7" clipRule="evenodd" />
    </IconBase>
  ))
);

GhostBold.displayName = 'GhostBold';

// Triple export pattern (lucide-react style)
export { GhostBold, GhostBold as GhostBoldIcon, GhostBold as SiGhostBold };
export default GhostBold;
export type { GhostBoldProps };
