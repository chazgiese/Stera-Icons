import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShuffleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShuffleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShuffleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shuffle-duotone" {...props}>
      <path d="M8.6 14.36a.75.75 0 0 1 1.2.9c-.97 1.29-2.2 2.49-3.8 2.49H3a.75.75 0 0 1 0-1.5h3c.82 0 1.65-.63 2.6-1.9M17.97 3.97c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H16c-.82 0-1.65.63-2.6 1.9a.75.75 0 0 1-1.2-.9c.97-1.3 2.2-2.5 3.8-2.5h3.19l-1.22-1.22a.75.75 0 0 1 0-1.06" opacity={0.4} />
        <path fill="currentColor" d="M6 6.25c1.33 0 2.4.83 3.25 1.82.87 1 1.65 2.31 2.4 3.54a25 25 0 0 0 2.23 3.34Q15 16.26 16 16.25h3.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H16c-1.33 0-2.4-.83-3.25-1.82-.87-1-1.65-2.31-2.4-3.54a25 25 0 0 0-2.23-3.34Q7 7.74 6 7.75H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ShuffleRegularDuotone.displayName = 'ShuffleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShuffleRegularDuotone, ShuffleRegularDuotone as ShuffleRegularDuotoneIcon, ShuffleRegularDuotone as SiShuffleRegularDuotone };
export default ShuffleRegularDuotone;
export type { ShuffleRegularDuotoneProps };
