import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilTipFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilTipFillDuotone = memo(
  forwardRef<SVGSVGElement, PencilTipFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-tip-fill-duotone" {...props}>
      <path d="m4 12.12 2.66 1.33a3 3 0 0 0 2.68 0l1.66-.83V23H6a2 2 0 0 1-2-2zM20 21a2 2 0 0 1-2 2h-5V12.62l1.66.83a3 3 0 0 0 2.68 0l.66-.33 2-1zM19.16 9.57q.24.31.4.65l-.04-.1-3.07 1.54a1 1 0 0 1-.9 0l-2.2-1.1a3 3 0 0 0-2.7 0l-2.2 1.1a1 1 0 0 1-.9 0l-3.07-1.53-.05.1a4 4 0 0 1 .41-.66L8.02 5.5l.74.62a5.1 5.1 0 0 0 6.48 0l.74-.62z" opacity={0.4} />
        <path fill="currentColor" d="M19.52 10.13a4 4 0 0 1 .48 1.9v.09l-2 1-.66.33a3 3 0 0 1-2.68 0L13 12.62V23h-2V12.62l-1.66.83a3 3 0 0 1-2.68 0L4 12.12v-.09a4 4 0 0 1 .48-1.9l3.07 1.53a1 1 0 0 0 .9 0l2.2-1.1a3 3 0 0 1 2.7 0l2.2 1.1a1 1 0 0 0 .9 0zM12 1c.3 0 .6.14.79.39l3.19 4.1-.74.62a5.1 5.1 0 0 1-6.48 0l-.74-.62 3.2-4.1.07-.09A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

PencilTipFillDuotone.displayName = 'PencilTipFillDuotone';

// Triple export pattern (lucide-react style)
export { PencilTipFillDuotone, PencilTipFillDuotone as PencilTipFillDuotoneIcon, PencilTipFillDuotone as SiPencilTipFillDuotone };
export default PencilTipFillDuotone;
export type { PencilTipFillDuotoneProps };
