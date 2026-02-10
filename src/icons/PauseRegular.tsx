import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseRegularProps = Omit<IconBaseProps, 'children'>;

const PauseRegular = memo(
  forwardRef<SVGSVGElement, PauseRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.75 2.75a2 2 0 0 1 2 2v14.5a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2V4.75c0-1.1.9-2 2-2zm-2.5 1.5a.5.5 0 0 0-.5.5v14.5c0 .28.22.5.5.5h2.5a.5.5 0 0 0 .5-.5V4.75a.5.5 0 0 0-.5-.5zM17.75 2.75a2 2 0 0 1 2 2v14.5a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2V4.75c0-1.1.9-2 2-2zm-2.5 1.5a.5.5 0 0 0-.5.5v14.5c0 .28.22.5.5.5h2.5a.5.5 0 0 0 .5-.5V4.75a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseRegular.displayName = 'PauseRegular';

// Triple export pattern (lucide-react style)
export { PauseRegular, PauseRegular as PauseRegularIcon, PauseRegular as SiPauseRegular };
export default PauseRegular;
export type { PauseRegularProps };
