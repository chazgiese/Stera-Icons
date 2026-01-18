import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PeaceFillProps = Omit<IconBaseProps, 'children'>;

const PeaceFill = memo(
  forwardRef<SVGSVGElement, PeaceFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11 22.95a11 11 0 0 1-6.04-2.5L11 14.41zM19.04 20.45a11 11 0 0 1-6.04 2.5v-8.54zM11 11.59l-7.45 7.45a11 11 0 0 1 7.45-18zM13 1.05a11 11 0 0 1 7.45 17.99L13 11.59z" />
    </IconBase>
  ))
);

PeaceFill.displayName = 'PeaceFill';

// Triple export pattern (lucide-react style)
export { PeaceFill, PeaceFill as PeaceFillIcon, PeaceFill as SiPeaceFill };
export type { PeaceFillProps };
