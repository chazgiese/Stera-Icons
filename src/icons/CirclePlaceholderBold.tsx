import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBold = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder-bold" {...props}>
      <path fillRule="evenodd" d="M10.59 2.1a9.99 9.99 0 0 1 6.93 18.24 9.96 9.96 0 0 1-12.6-1.27A9.99 9.99 0 0 1 10.6 2.1M4.08 13.13a7.96 7.96 0 0 0 6.79 6.79zm.64-4.45a8 8 0 0 0-.56 1.7l9.45 9.45q.89-.17 1.7-.55zm2.22-2.87A8 8 0 0 0 5.8 6.94l11.25 11.25a8 8 0 0 0 1.13-1.13zm3.45-1.65q-.88.18-1.71.56l10.6 10.6q.38-.83.55-1.7zm9.53 6.7a7.96 7.96 0 0 0-6.79-6.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBold.displayName = 'CirclePlaceholderBold';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderBold, CirclePlaceholderBold as CirclePlaceholderBoldIcon, CirclePlaceholderBold as SiCirclePlaceholderBold };
export default CirclePlaceholderBold;
export type { CirclePlaceholderBoldProps };
