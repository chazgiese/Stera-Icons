import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-left-bold-duotone" {...props}>
      <path d="M18 7a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3.5v-1a1 1 0 0 0-1-1H18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5a1 1 0 0 1 1-1V7zM12.73 15.36l-.06.08z" opacity={0.4} />
        <path fill="currentColor" d="M11.94 2.15A1.5 1.5 0 0 1 14.5 3.2V8a1 1 0 0 1-2 0V4.41l-7.4 7.41c-.1.1-.1.26 0 .36l7.4 7.4V16a1 1 0 1 1 2 0v4.8c0 1.33-1.62 2-2.56 1.05L3.68 13.6a2.25 2.25 0 0 1 0-3.18z" />
    </IconBase>
  ))
);

ArrowBigLeftBoldDuotone.displayName = 'ArrowBigLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftBoldDuotone, ArrowBigLeftBoldDuotone as ArrowBigLeftBoldDuotoneIcon, ArrowBigLeftBoldDuotone as SiArrowBigLeftBoldDuotone };
export type { ArrowBigLeftBoldDuotoneProps };
