import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PauseCircleFillProps = Omit<IconBaseProps, 'children'>;

const PauseCircleFill = memo(
  forwardRef<SVGSVGElement, PauseCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm5 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseCircleFill.displayName = 'PauseCircleFill';

// Triple export pattern (lucide-react style)
export { PauseCircleFill, PauseCircleFill as PauseCircleFillIcon, PauseCircleFill as SiPauseCircleFill };
export type { PauseCircleFillProps };
