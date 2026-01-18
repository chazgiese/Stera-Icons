import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OverlappingCirclesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesRegularDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 4.75a7.25 7.25 0 1 1 0 14.5 7.25 7.25 0 0 1 0-14.5m0 1.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.5 4.75c1.27 0 2.46.33 3.5.9q-.75.42-1.4 1A5.73 5.73 0 0 0 2.76 12a5.75 5.75 0 0 0 7.86 5.35q.64.57 1.39 1a7.25 7.25 0 1 1-3.5-13.6" />
        <path fill="currentColor" d="M13.4 6.65a7.23 7.23 0 0 1 0 10.7q-.77-.3-1.4-.79a5.74 5.74 0 0 0 0-9.12q.63-.5 1.4-.79" />
    </IconBase>
  ))
);

OverlappingCirclesRegularDuotone.displayName = 'OverlappingCirclesRegularDuotone';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesRegularDuotone, OverlappingCirclesRegularDuotone as OverlappingCirclesRegularDuotoneIcon, OverlappingCirclesRegularDuotone as SiOverlappingCirclesRegularDuotone };
export type { OverlappingCirclesRegularDuotoneProps };
