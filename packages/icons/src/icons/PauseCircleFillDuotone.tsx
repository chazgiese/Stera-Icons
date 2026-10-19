import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm5 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M8 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1zM13 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1z" />
    </IconBase>
  ))
);

PauseCircleFillDuotone.displayName = 'PauseCircleFillDuotone';

// Triple export pattern
export { PauseCircleFillDuotone, PauseCircleFillDuotone as PauseCircleFillDuotoneIcon, PauseCircleFillDuotone as SiPauseCircleFillDuotone };
export default PauseCircleFillDuotone;
export type { PauseCircleFillDuotoneProps };
