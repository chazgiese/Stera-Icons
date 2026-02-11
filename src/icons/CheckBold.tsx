import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBoldProps = Omit<IconBaseProps, 'children'>;

const CheckBold = memo(
  forwardRef<SVGSVGElement, CheckBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-bold" {...props}>
      <path d="M19.27 5.32a1 1 0 0 1 1.46 1.36L10.21 17.96l-.34.34a1.5 1.5 0 0 1-1.63.27c-.26-.12-.43-.3-.54-.42l-.29-.39-4.23-6.04a1 1 0 0 1 1.64-1.15l4.1 5.84z" />
    </IconBase>
  ))
);

CheckBold.displayName = 'CheckBold';

// Triple export pattern (lucide-react style)
export { CheckBold, CheckBold as CheckBoldIcon, CheckBold as SiCheckBold };
export default CheckBold;
export type { CheckBoldProps };
