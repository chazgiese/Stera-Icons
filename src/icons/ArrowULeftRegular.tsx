import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowULeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left" {...props}>
      <path fill="currentColor" d="M15.5 3.25a7.25 7.25 0 1 1 0 14.5H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a1 1 0 0 1-.15-.22l-.02-.05-.03-.09v-.04l-.01-.04a.8.8 0 0 1 .21-.62l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72H15.5a5.75 5.75 0 0 0 0-11.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArrowULeftRegular.displayName = 'ArrowULeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowULeftRegular, ArrowULeftRegular as ArrowULeftRegularIcon, ArrowULeftRegular as SiArrowULeftRegular };
export type { ArrowULeftRegularProps };
