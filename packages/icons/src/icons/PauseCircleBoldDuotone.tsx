import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M8 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1zM13 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1z" />
    </IconBase>
  ))
);

PauseCircleBoldDuotone.displayName = 'PauseCircleBoldDuotone';

// Triple export pattern
export { PauseCircleBoldDuotone, PauseCircleBoldDuotone as PauseCircleBoldDuotoneIcon, PauseCircleBoldDuotone as SiPauseCircleBoldDuotone };
export default PauseCircleBoldDuotone;
export type { PauseCircleBoldDuotoneProps };
