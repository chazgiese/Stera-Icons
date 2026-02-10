import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left" {...props}>
      <path fill="currentColor" d="M14.3 8.64a.75.75 0 0 1 1.06 1.06l-4.38 4.38h3.85a.75.75 0 0 1 0 1.5H9.17a.75.75 0 0 1-.75-.75V9.17a.75.75 0 0 1 1.5 0v3.85z" />
        <path fill="currentColor" fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m12.73 1.07A8.25 8.25 0 1 0 6.17 17.83 8.25 8.25 0 0 0 17.83 6.17" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftRegular.displayName = 'ArrowCircleDownLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftRegular, ArrowCircleDownLeftRegular as ArrowCircleDownLeftRegularIcon, ArrowCircleDownLeftRegular as SiArrowCircleDownLeftRegular };
export default ArrowCircleDownLeftRegular;
export type { ArrowCircleDownLeftRegularProps };
