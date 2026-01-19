import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TogglesRegularProps = Omit<IconBaseProps, 'children'>;

const TogglesRegular = memo(
  forwardRef<SVGSVGElement, TogglesRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggles" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 12.75a4.75 4.75 0 1 1 0 9.5H8a4.75 4.75 0 1 1 0-9.5zm0 3a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M8 4.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1.75a4.75 4.75 0 1 1 0 9.5H8a4.75 4.75 0 0 1 0-9.5zm-8 1.5a3.25 3.25 0 1 0 0 6.5h8a3.25 3.25 0 0 0 0-6.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TogglesRegular.displayName = 'TogglesRegular';

// Triple export pattern (lucide-react style)
export { TogglesRegular, TogglesRegular as TogglesRegularIcon, TogglesRegular as SiTogglesRegular };
export type { TogglesRegularProps };
