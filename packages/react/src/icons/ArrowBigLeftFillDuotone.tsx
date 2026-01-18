import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.94 2.15A1.5 1.5 0 0 1 14.5 3.2V7h4A2.5 2.5 0 0 1 21 9.5v5a2.5 2.5 0 0 1-2.5 2.5h-4v3.8c0 1.33-1.62 2-2.56 1.05L3.68 13.6a2.25 2.25 0 0 1 0-3.18zm-6.85 9.67c-.1.1-.1.26 0 .36l7.41 7.4V16a1 1 0 0 1 1-1h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a1 1 0 0 1-1-1V4.41z" clipRule="evenodd" />
        <path fill="currentColor" d="M12.5 8a1 1 0 0 0 1 1h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-5a1 1 0 0 0-1 1v3.59l-7.4-7.41a.25.25 0 0 1 0-.36l7.4-7.4z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigLeftFillDuotone.displayName = 'ArrowBigLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftFillDuotone, ArrowBigLeftFillDuotone as ArrowBigLeftFillDuotoneIcon, ArrowBigLeftFillDuotone as SiArrowBigLeftFillDuotone };
export type { ArrowBigLeftFillDuotoneProps };
