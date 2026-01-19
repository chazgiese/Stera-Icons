import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PauseCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

PauseCircleBoldDuotone.displayName = 'PauseCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { PauseCircleBoldDuotone, PauseCircleBoldDuotone as PauseCircleBoldDuotoneIcon, PauseCircleBoldDuotone as SiPauseCircleBoldDuotone };
export default PauseCircleBoldDuotone;
export type { PauseCircleBoldDuotoneProps };
