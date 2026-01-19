import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowURightRegular = memo(
  forwardRef<SVGSVGElement, ArrowURightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right" {...props}>
      <path fill="currentColor" d="M8.5 3.25a7.25 7.25 0 0 0 0 14.5h11.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a1 1 0 0 0 .15-.22l.02-.05.03-.09v-.04l.01-.04.01-.09q0-.32-.22-.53l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H8.5a5.75 5.75 0 0 1 0-11.5H16a.75.75 0 0 0 0-1.5z" />
    </IconBase>
  ))
);

ArrowURightRegular.displayName = 'ArrowURightRegular';

// Triple export pattern (lucide-react style)
export { ArrowURightRegular, ArrowURightRegular as ArrowURightRegularIcon, ArrowURightRegular as SiArrowURightRegular };
export type { ArrowURightRegularProps };
