import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayFillProps = Omit<IconBaseProps, 'children'>;

const ArchwayFill = memo(
  forwardRef<SVGSVGElement, ArchwayFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway-fill" {...props}>
      <path fill="currentColor" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v9A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19v-9A8.75 8.75 0 0 1 12 1.25" />
    </IconBase>
  ))
);

ArchwayFill.displayName = 'ArchwayFill';

// Triple export pattern (lucide-react style)
export { ArchwayFill, ArchwayFill as ArchwayFillIcon, ArchwayFill as SiArchwayFill };
export default ArchwayFill;
export type { ArchwayFillProps };
