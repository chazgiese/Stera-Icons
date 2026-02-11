import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesRegularProps = Omit<IconBaseProps, 'children'>;

const TogglesRegular = memo(
  forwardRef<SVGSVGElement, TogglesRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggles" {...props}>
      <path fillRule="evenodd" d="M16 12.75a4.75 4.75 0 1 1 0 9.5H8a4.75 4.75 0 1 1 0-9.5zm0 3a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path d="M8 4.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fillRule="evenodd" d="M16 1.75a4.75 4.75 0 1 1 0 9.5H8a4.75 4.75 0 0 1 0-9.5zm-8 1.5a3.25 3.25 0 1 0 0 6.5h8a3.25 3.25 0 0 0 0-6.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TogglesRegular.displayName = 'TogglesRegular';

// Triple export pattern (lucide-react style)
export { TogglesRegular, TogglesRegular as TogglesRegularIcon, TogglesRegular as SiTogglesRegular };
export default TogglesRegular;
export type { TogglesRegularProps };
