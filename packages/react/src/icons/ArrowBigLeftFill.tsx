import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.94 2.15A1.5 1.5 0 0 1 14.5 3.2V7H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4.5v3.8c0 1.33-1.62 2-2.56 1.05L3.68 13.6a2.25 2.25 0 0 1 0-3.18z" />
    </IconBase>
  ))
);

ArrowBigLeftFill.displayName = 'ArrowBigLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftFill, ArrowBigLeftFill as ArrowBigLeftFillIcon, ArrowBigLeftFill as SiArrowBigLeftFill };
export type { ArrowBigLeftFillProps };
