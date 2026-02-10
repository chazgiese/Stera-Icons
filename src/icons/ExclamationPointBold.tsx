import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointBoldProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointBold = memo(
  forwardRef<SVGSVGElement, ExclamationPointBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="exclamation-point-bold" {...props}>
      <path fill="currentColor" d="M12 17.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 2.5c.42 0 .82.16 1.1.44q.42.44.4 1.06l-.03.53-.44 9.45-.03.52a1 1 0 0 1-.32.67 1 1 0 0 1-.68.28 1 1 0 0 1-.68-.28 1 1 0 0 1-.32-.67l-.03-.52-.44-9.45L10.5 4c-.02-.4.12-.78.4-1.06s.68-.44 1.1-.44" />
    </IconBase>
  ))
);

ExclamationPointBold.displayName = 'ExclamationPointBold';

// Triple export pattern (lucide-react style)
export { ExclamationPointBold, ExclamationPointBold as ExclamationPointBoldIcon, ExclamationPointBold as SiExclamationPointBold };
export default ExclamationPointBold;
export type { ExclamationPointBoldProps };
