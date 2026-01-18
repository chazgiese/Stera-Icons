import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigUpRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpRegular = memo(
  forwardRef<SVGSVGElement, ArrowBigUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.59 3.85a2 2 0 0 1 2.82 0l8.27 8.27c.78.78.23 2.13-.89 2.13h-4.04V18A2.75 2.75 0 0 1 14 20.75h-4A2.75 2.75 0 0 1 7.25 18v-3.75H3.21a1.25 1.25 0 0 1-.89-2.13zm1.76 1.06a.5.5 0 0 0-.7 0L3.8 12.75H8c.41 0 .75.34.75.75V18c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-4.5c0-.41.34-.75.75-.75h4.19z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigUpRegular.displayName = 'ArrowBigUpRegular';

// Triple export pattern (lucide-react style)
export { ArrowBigUpRegular, ArrowBigUpRegular as ArrowBigUpRegularIcon, ArrowBigUpRegular as SiArrowBigUpRegular };
export type { ArrowBigUpRegularProps };
