import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BottleFillProps = Omit<IconBaseProps, 'children'>;

const BottleFill = memo(
  forwardRef<SVGSVGElement, BottleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-fill" {...props}>
      <path fill="currentColor" d="M13.5 1a1 1 0 0 1 .13 1.99l.54 4.33a1 1 0 0 0 .21.5l1.21 1.5a3 3 0 0 1 .66 1.88V21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9.8a3 3 0 0 1 .66-1.87l1.2-1.51a1 1 0 0 0 .22-.5l.54-4.33A1 1 0 0 1 10.5 1z" />
    </IconBase>
  ))
);

BottleFill.displayName = 'BottleFill';

// Triple export pattern (lucide-react style)
export { BottleFill, BottleFill as BottleFillIcon, BottleFill as SiBottleFill };
export type { BottleFillProps };
