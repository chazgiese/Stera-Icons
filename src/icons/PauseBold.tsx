import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PauseBoldProps = Omit<IconBaseProps, 'children'>;

const PauseBold = memo(
  forwardRef<SVGSVGElement, PauseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM18 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-2 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseBold.displayName = 'PauseBold';

// Triple export pattern (lucide-react style)
export { PauseBold, PauseBold as PauseBoldIcon, PauseBold as SiPauseBold };
export type { PauseBoldProps };
