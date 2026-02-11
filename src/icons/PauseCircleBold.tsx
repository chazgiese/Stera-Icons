import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PauseCircleBold = memo(
  forwardRef<SVGSVGElement, PauseCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-circle-bold" {...props}>
      <path d="M10 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseCircleBold.displayName = 'PauseCircleBold';

// Triple export pattern (lucide-react style)
export { PauseCircleBold, PauseCircleBold as PauseCircleBoldIcon, PauseCircleBold as SiPauseCircleBold };
export default PauseCircleBold;
export type { PauseCircleBoldProps };
