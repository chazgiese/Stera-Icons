import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PauseCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm5 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

PauseCircleFillDuotone.displayName = 'PauseCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PauseCircleFillDuotone, PauseCircleFillDuotone as PauseCircleFillDuotoneIcon, PauseCircleFillDuotone as SiPauseCircleFillDuotone };
export type { PauseCircleFillDuotoneProps };
