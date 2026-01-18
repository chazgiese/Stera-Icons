import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.47 4.47a.75.75 0 1 1 1.06 1.06l-5.72 5.72H19a.75.75 0 0 1 0 1.5H6.81l5.72 5.72a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ArrowLeftRegular.displayName = 'ArrowLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowLeftRegular, ArrowLeftRegular as ArrowLeftRegularIcon, ArrowLeftRegular as SiArrowLeftRegular };
export type { ArrowLeftRegularProps };
