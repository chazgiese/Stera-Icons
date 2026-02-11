import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowBigDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-down" {...props}>
      <path fillRule="evenodd" d="M14 3.25A2.75 2.75 0 0 1 16.75 6v3.75h4.04c1.12 0 1.67 1.35.89 2.13l-8.27 8.27a2 2 0 0 1-2.82 0l-8.27-8.27a1.25 1.25 0 0 1 .89-2.13h4.04V6A2.75 2.75 0 0 1 10 3.25zm-4 1.5c-.7 0-1.25.56-1.25 1.25v4.5c0 .41-.34.75-.75.75H3.81l7.84 7.84c.2.2.5.2.7 0l7.84-7.84H16a.75.75 0 0 1-.75-.75V6c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigDownRegular.displayName = 'ArrowBigDownRegular';

// Triple export pattern (lucide-react style)
export { ArrowBigDownRegular, ArrowBigDownRegular as ArrowBigDownRegularIcon, ArrowBigDownRegular as SiArrowBigDownRegular };
export default ArrowBigDownRegular;
export type { ArrowBigDownRegularProps };
