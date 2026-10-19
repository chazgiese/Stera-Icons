import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.68 20.46c.48-.1.94.22 1.03.69s-.21.93-.69 1.03q-.98.2-2.02.2-1.05 0-2.02-.2c-.48-.1-.79-.56-.7-1.03s.56-.78 1.04-.69q.81.16 1.68.16t1.68-.16M3.61 16.55c.4-.27.95-.16 1.22.24q.96 1.42 2.38 2.38c.4.27.5.82.24 1.22-.27.4-.81.5-1.21.24q-1.72-1.15-2.87-2.87c-.27-.4-.16-.94.24-1.2M19.17 16.8c.27-.41.82-.52 1.22-.25s.5.81.24 1.21q-1.15 1.72-2.87 2.87c-.4.27-.94.16-1.2-.24-.28-.4-.17-.95.23-1.22q1.42-.96 2.38-2.38M1.82 9.98c.1-.48.56-.79 1.03-.7s.78.56.69 1.04q-.16.81-.17 1.68 0 .87.17 1.68c.1.48-.22.94-.69 1.03s-.93-.21-1.03-.69q-.2-.98-.2-2.02 0-1.05.2-2.02M21.15 9.29c.47-.1.93.21 1.03.69q.2.98.2 2.02 0 1.05-.2 2.02c-.1.48-.56.79-1.03.7s-.78-.56-.69-1.04q.16-.81.16-1.68t-.16-1.68c-.1-.48.22-.94.69-1.03M6.24 3.37c.4-.27.94-.16 1.2.24.28.4.17.95-.23 1.22q-1.42.96-2.38 2.38c-.27.4-.82.5-1.22.24-.4-.27-.5-.81-.24-1.21q1.15-1.72 2.87-2.87M16.55 3.61c.27-.4.81-.5 1.21-.24q1.72 1.15 2.87 2.87c.27.4.16.94-.24 1.2-.4.28-.95.17-1.22-.23q-.96-1.42-2.38-2.38c-.4-.27-.5-.82-.24-1.22M12 1.63q1.05 0 2.02.2c.48.09.79.55.7 1.02s-.56.78-1.04.69q-.81-.16-1.68-.17-.87 0-1.68.17c-.48.1-.94-.22-1.03-.69s.21-.93.69-1.03q.98-.2 2.02-.2" opacity={0.4} />
        <path d="M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6" />
    </IconBase>
  ))
);

CircleDashFillDuotone.displayName = 'CircleDashFillDuotone';

// Triple export pattern
export { CircleDashFillDuotone, CircleDashFillDuotone as CircleDashFillDuotoneIcon, CircleDashFillDuotone as SiCircleDashFillDuotone };
export default CircleDashFillDuotone;
export type { CircleDashFillDuotoneProps };
