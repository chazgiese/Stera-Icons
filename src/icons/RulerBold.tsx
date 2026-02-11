import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulerBoldProps = Omit<IconBaseProps, 'children'>;

const RulerBold = memo(
  forwardRef<SVGSVGElement, RulerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="ruler-bold" {...props}>
      <path fillRule="evenodd" d="M5.9 2.18c.89-.88 2.31-.88 3.2 0L21.81 14.9c.88.88.88 2.3 0 3.18l-3.73 3.73c-.88.88-2.3.88-3.18 0L2.18 9.1a2.25 2.25 0 0 1 0-3.18zm1.78 1.41a.25.25 0 0 0-.36 0L3.6 7.32c-.1.1-.1.26 0 .36l2.66 2.66 1.54-1.55a1 1 0 1 1 1.42 1.42l-1.55 1.54 1.59 1.59 1.54-1.55a1 1 0 1 1 1.42 1.42l-1.55 1.54 1.59 1.59 1.54-1.55a1 1 0 1 1 1.42 1.42l-1.55 1.54 2.66 2.66c.1.1.26.1.36 0l3.73-3.73c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulerBold.displayName = 'RulerBold';

// Triple export pattern (lucide-react style)
export { RulerBold, RulerBold as RulerBoldIcon, RulerBold as SiRulerBold };
export default RulerBold;
export type { RulerBoldProps };
