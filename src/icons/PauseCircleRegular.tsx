import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PauseCircleRegular = memo(
  forwardRef<SVGSVGElement, PauseCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-circle" {...props}>
      <path d="M10 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseCircleRegular.displayName = 'PauseCircleRegular';

// Triple export pattern (lucide-react style)
export { PauseCircleRegular, PauseCircleRegular as PauseCircleRegularIcon, PauseCircleRegular as SiPauseCircleRegular };
export default PauseCircleRegular;
export type { PauseCircleRegularProps };
