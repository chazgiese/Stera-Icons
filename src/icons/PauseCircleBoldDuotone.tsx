import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM13 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
    </IconBase>
  ))
);

PauseCircleBoldDuotone.displayName = 'PauseCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { PauseCircleBoldDuotone, PauseCircleBoldDuotone as PauseCircleBoldDuotoneIcon, PauseCircleBoldDuotone as SiPauseCircleBoldDuotone };
export default PauseCircleBoldDuotone;
export type { PauseCircleBoldDuotoneProps };
