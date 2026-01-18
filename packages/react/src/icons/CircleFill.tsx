import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleFillProps = Omit<IconBaseProps, 'children'>;

const CircleFill = memo(
  forwardRef<SVGSVGElement, CircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22" />
    </IconBase>
  ))
);

CircleFill.displayName = 'CircleFill';

// Triple export pattern (lucide-react style)
export { CircleFill, CircleFill as CircleFillIcon, CircleFill as SiCircleFill };
export type { CircleFillProps };
