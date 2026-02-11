import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm5 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M8 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM13 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
    </IconBase>
  ))
);

PauseCircleFillDuotone.displayName = 'PauseCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PauseCircleFillDuotone, PauseCircleFillDuotone as PauseCircleFillDuotoneIcon, PauseCircleFillDuotone as SiPauseCircleFillDuotone };
export default PauseCircleFillDuotone;
export type { PauseCircleFillDuotoneProps };
