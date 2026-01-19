import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down" {...props}>
      <path fill="currentColor" d="M12 4.25c.41 0 .75.34.75.75v12.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-7 7c-.3.3-.77.3-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06l5.72 5.72V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowDownRegular.displayName = 'ArrowDownRegular';

// Triple export pattern (lucide-react style)
export { ArrowDownRegular, ArrowDownRegular as ArrowDownRegularIcon, ArrowDownRegular as SiArrowDownRegular };
export type { ArrowDownRegularProps };
