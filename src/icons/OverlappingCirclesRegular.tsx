import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesRegularProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesRegular = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 4.75a7.25 7.25 0 1 1-3.5 13.6 7.25 7.25 0 1 1 0-12.7 7 7 0 0 1 3.5-.9m-7 1.5a5.75 5.75 0 1 0 2.1 11.1 7.23 7.23 0 0 1 0-10.7 6 6 0 0 0-2.1-.4m7 0q-1.12 0-2.1.4a7.23 7.23 0 0 1 0 10.7A5.73 5.73 0 0 0 21.24 12a5.75 5.75 0 0 0-5.75-5.75M12 7.44a5.74 5.74 0 0 0 0 9.12 5.74 5.74 0 0 0 0-9.12" clipRule="evenodd" />
    </IconBase>
  ))
);

OverlappingCirclesRegular.displayName = 'OverlappingCirclesRegular';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesRegular, OverlappingCirclesRegular as OverlappingCirclesRegularIcon, OverlappingCirclesRegular as SiOverlappingCirclesRegular };
export default OverlappingCirclesRegular;
export type { OverlappingCirclesRegularProps };
