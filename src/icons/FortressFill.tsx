import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FortressFillProps = Omit<IconBaseProps, 'children'>;

const FortressFill = memo(
  forwardRef<SVGSVGElement, FortressFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="fortress-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.14 3.01a1 1 0 0 1 .75.54L5.62 5h.76l.73-1.45.07-.12A1 1 0 0 1 8 3h2a1 1 0 0 1 1 1v4h2V4a1 1 0 0 1 1-1h2l.14.01a1 1 0 0 1 .75.54L17.62 5h.76l.73-1.45.07-.12A1 1 0 0 1 20 3h2a1 1 0 0 1 1 1v15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2v-2a2 2 0 1 0-4 0v2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2V4a1 1 0 0 1 1-1h2zM6 8.5a1 1 0 0 0-1 1V11a1 1 0 1 0 2 0V9.5a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1v1.6a1 1 0 0 0 2 0V9.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

FortressFill.displayName = 'FortressFill';

// Triple export pattern (lucide-react style)
export { FortressFill, FortressFill as FortressFillIcon, FortressFill as SiFortressFill };
export default FortressFill;
export type { FortressFillProps };
