import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GhostRegularProps = Omit<IconBaseProps, 'children'>;

const GhostRegular = memo(
  forwardRef<SVGSVGElement, GhostRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="ghost" {...props}>
      <path fill="currentColor" d="M9 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v12q0 .22-.13.42a.75.75 0 0 1-1.04.2l-2.54-1.7-2.07 1.67a.75.75 0 0 1-.94 0L12 20.96 9.97 22.6a.75.75 0 0 1-.94 0l-2.07-1.66-2.54 1.7A.75.75 0 0 1 3.25 22V10A8.75 8.75 0 0 1 12 1.25m0 1.5C8 2.75 4.75 6 4.75 10v10.6l1.83-1.22.1-.06a.8.8 0 0 1 .79.1l2.03 1.62 2.03-1.63.1-.07a.8.8 0 0 1 .84.07l2.03 1.63 2.03-1.63.1-.06a.8.8 0 0 1 .79.03l1.83 1.22V10c0-4-3.25-7.25-7.25-7.25" clipRule="evenodd" />
    </IconBase>
  ))
);

GhostRegular.displayName = 'GhostRegular';

// Triple export pattern (lucide-react style)
export { GhostRegular, GhostRegular as GhostRegularIcon, GhostRegular as SiGhostRegular };
export default GhostRegular;
export type { GhostRegularProps };
