import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineUpRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-up" {...props}>
      <path fill="currentColor" d="M3.25 3c0 .41.34.75.75.75h16a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75M4.47 13.47a.75.75 0 1 0 1.06 1.06l5.72-5.72V21a.75.75 0 0 0 1.5 0V8.81l5.72 5.72a.75.75 0 1 0 1.06-1.06l-7-7a.75.75 0 0 0-1.06 0z" />
    </IconBase>
  ))
);

ArrowLineUpRegular.displayName = 'ArrowLineUpRegular';

// Triple export pattern (lucide-react style)
export { ArrowLineUpRegular, ArrowLineUpRegular as ArrowLineUpRegularIcon, ArrowLineUpRegular as SiArrowLineUpRegular };
export default ArrowLineUpRegular;
export type { ArrowLineUpRegularProps };
