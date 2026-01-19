import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PauseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseRegularDuotone = memo(
  forwardRef<SVGSVGElement, PauseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 2.25A2.75 2.75 0 0 1 20.75 5v14A2.75 2.75 0 0 1 18 21.75h-2A2.75 2.75 0 0 1 13.25 19V5A2.75 2.75 0 0 1 16 2.25zm-2 1.5c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8 2.25A2.75 2.75 0 0 1 10.75 5v14A2.75 2.75 0 0 1 8 21.75H6A2.75 2.75 0 0 1 3.25 19V5A2.75 2.75 0 0 1 6 2.25zm-2 1.5c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseRegularDuotone.displayName = 'PauseRegularDuotone';

// Triple export pattern (lucide-react style)
export { PauseRegularDuotone, PauseRegularDuotone as PauseRegularDuotoneIcon, PauseRegularDuotone as SiPauseRegularDuotone };
export type { PauseRegularDuotoneProps };
