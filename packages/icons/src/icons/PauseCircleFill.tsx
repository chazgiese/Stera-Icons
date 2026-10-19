import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleFillProps = Omit<IconBaseProps, 'children'>;

const PauseCircleFill = memo(
  forwardRef<SVGSVGElement, PauseCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm5 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseCircleFill.displayName = 'PauseCircleFill';

// Triple export pattern
export { PauseCircleFill, PauseCircleFill as PauseCircleFillIcon, PauseCircleFill as SiPauseCircleFill };
export default PauseCircleFill;
export type { PauseCircleFillProps };
