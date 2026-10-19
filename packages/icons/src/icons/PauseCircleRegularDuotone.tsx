import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M8 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1zM13 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1z" />
    </IconBase>
  ))
);

PauseCircleRegularDuotone.displayName = 'PauseCircleRegularDuotone';

// Triple export pattern
export { PauseCircleRegularDuotone, PauseCircleRegularDuotone as PauseCircleRegularDuotoneIcon, PauseCircleRegularDuotone as SiPauseCircleRegularDuotone };
export default PauseCircleRegularDuotone;
export type { PauseCircleRegularDuotoneProps };
