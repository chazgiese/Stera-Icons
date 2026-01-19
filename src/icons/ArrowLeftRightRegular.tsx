import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-right" {...props}>
      <path fill="currentColor" d="M16.97 6.97c.3-.3.77-.3 1.06 0l4.5 4.5a.75.75 0 0 1 .1.95l-.1.11-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H3.8l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5-.05-.06a.75.75 0 0 1 .05-1l4.5-4.5a.75.75 0 1 1 1.06 1.06l-3.22 3.22h16.38l-3.22-3.22a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowLeftRightRegular.displayName = 'ArrowLeftRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightRegular, ArrowLeftRightRegular as ArrowLeftRightRegularIcon, ArrowLeftRightRegular as SiArrowLeftRightRegular };
export type { ArrowLeftRightRegularProps };
