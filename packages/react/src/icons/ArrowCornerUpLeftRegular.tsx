import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 20.75c.41 0 .75-.34.75-.75v-8A3.75 3.75 0 0 0 18 8.25H4.81l3.72-3.72a.75.75 0 1 0-1.06-1.06l-5 5-.1.11-.05.11-.02.05-.03.09v.04l-.01.04a.8.8 0 0 0 .21.62l5 5a.75.75 0 1 0 1.06-1.06L4.81 9.75H18c1.24 0 2.25 1 2.25 2.25v8c0 .41.34.75.75.75" />
    </IconBase>
  ))
);

ArrowCornerUpLeftRegular.displayName = 'ArrowCornerUpLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftRegular, ArrowCornerUpLeftRegular as ArrowCornerUpLeftRegularIcon, ArrowCornerUpLeftRegular as SiArrowCornerUpLeftRegular };
export type { ArrowCornerUpLeftRegularProps };
