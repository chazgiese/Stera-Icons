import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayFillProps = Omit<IconBaseProps, 'children'>;

const ArchwayFill = memo(
  forwardRef<SVGSVGElement, ArchwayFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway-fill" {...props}>
      <path d="M12 2.25A7.75 7.75 0 0 1 19.75 10v6.2q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V10A7.75 7.75 0 0 1 12 2.25" />
    </IconBase>
  ))
);

ArchwayFill.displayName = 'ArchwayFill';

// Triple export pattern (lucide-react style)
export { ArchwayFill, ArchwayFill as ArchwayFillIcon, ArchwayFill as SiArchwayFill };
export default ArchwayFill;
export type { ArchwayFillProps };
