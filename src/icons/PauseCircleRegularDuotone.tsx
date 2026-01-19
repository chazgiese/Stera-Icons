import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PauseCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

PauseCircleRegularDuotone.displayName = 'PauseCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { PauseCircleRegularDuotone, PauseCircleRegularDuotone as PauseCircleRegularDuotoneIcon, PauseCircleRegularDuotone as SiPauseCircleRegularDuotone };
export type { PauseCircleRegularDuotoneProps };
