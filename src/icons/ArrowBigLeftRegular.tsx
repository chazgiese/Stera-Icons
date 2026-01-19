import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-left" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.12 2.32a1.25 1.25 0 0 1 2.13.89v4.04H18A2.75 2.75 0 0 1 20.75 10v4A2.75 2.75 0 0 1 18 16.75h-3.75v4.04a1.25 1.25 0 0 1-2.13.89L3.85 13.4a2 2 0 0 1 0-2.82zm-7.2 9.33a.5.5 0 0 0 0 .7l7.83 7.84V16c0-.41.34-.75.75-.75H18c.7 0 1.25-.56 1.25-1.25v-4c0-.7-.56-1.25-1.25-1.25h-4.5a.75.75 0 0 1-.75-.75V3.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigLeftRegular.displayName = 'ArrowBigLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftRegular, ArrowBigLeftRegular as ArrowBigLeftRegularIcon, ArrowBigLeftRegular as SiArrowBigLeftRegular };
export type { ArrowBigLeftRegularProps };
