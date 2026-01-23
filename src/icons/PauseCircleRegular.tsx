import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PauseCircleRegular = memo(
  forwardRef<SVGSVGElement, PauseCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-circle" {...props}>
      <path fill="currentColor" d="M10 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseCircleRegular.displayName = 'PauseCircleRegular';

// Triple export pattern (lucide-react style)
export { PauseCircleRegular, PauseCircleRegular as PauseCircleRegularIcon, PauseCircleRegular as SiPauseCircleRegular };
export default PauseCircleRegular;
export type { PauseCircleRegularProps };
