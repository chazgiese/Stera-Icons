import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeSimpleFillProps = Omit<IconBaseProps, 'children'>;

const HomeSimpleFill = memo(
  forwardRef<SVGSVGElement, HomeSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3z" />
    </IconBase>
  ))
);

HomeSimpleFill.displayName = 'HomeSimpleFill';

// Triple export pattern (lucide-react style)
export { HomeSimpleFill, HomeSimpleFill as HomeSimpleFillIcon, HomeSimpleFill as SiHomeSimpleFill };
export type { HomeSimpleFillProps };
