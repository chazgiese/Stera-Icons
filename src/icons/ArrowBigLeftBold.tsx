import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-left-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.94 2.15A1.5 1.5 0 0 1 14.5 3.2V7H18a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3.5v3.8c0 1.33-1.62 2-2.56 1.05L3.68 13.6a2.25 2.25 0 0 1 0-3.18zm-6.85 9.67c-.1.1-.1.26 0 .36l7.41 7.4V16a1 1 0 0 1 1-1H18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5a1 1 0 0 1-1-1V4.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigLeftBold.displayName = 'ArrowBigLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftBold, ArrowBigLeftBold as ArrowBigLeftBoldIcon, ArrowBigLeftBold as SiArrowBigLeftBold };
export default ArrowBigLeftBold;
export type { ArrowBigLeftBoldProps };
