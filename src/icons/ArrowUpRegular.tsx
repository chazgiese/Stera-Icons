import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up" {...props}>
      <path fill="currentColor" d="M4.47 12.53a.75.75 0 0 1 0-1.06l7-7c.3-.3.77-.3 1.06 0l7 7a.75.75 0 1 1-1.06 1.06l-5.72-5.72V19a.75.75 0 0 1-1.5 0V6.81l-5.72 5.72c-.3.3-.77.3-1.06 0" />
    </IconBase>
  ))
);

ArrowUpRegular.displayName = 'ArrowUpRegular';

// Triple export pattern (lucide-react style)
export { ArrowUpRegular, ArrowUpRegular as ArrowUpRegularIcon, ArrowUpRegular as SiArrowUpRegular };
export type { ArrowUpRegularProps };
