import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LassoDashFillProps = Omit<IconBaseProps, 'children'>;

const LassoDashFill = memo(
  forwardRef<SVGSVGElement, LassoDashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lasso-dash-fill" {...props}>
      <path fill="currentColor" d="M12.27 19.46a1.5 1.5 0 0 1 .39 2.98 14 14 0 0 1-1.08.1 1.5 1.5 0 1 1-.13-3zM5.6 19.13a1.5 1.5 0 0 1 2.06-.5q.32.21.68.36a1.5 1.5 0 0 1-1.22 2.75q-.54-.24-1.03-.55a1.5 1.5 0 0 1-.5-2.06M16.08 18.15a1.5 1.5 0 0 1 1.58 2.55q-.46.28-.94.52a1.5 1.5 0 0 1-1.34-2.68q.37-.2.7-.4M3.23 14.88a1.5 1.5 0 0 1 1.96.8q.16.38.35.72a1.5 1.5 0 1 1-2.61 1.46 10 10 0 0 1-.5-1.02 1.5 1.5 0 0 1 .8-1.96M18.76 15.36a1.5 1.5 0 0 1 2.64 1.42q-.25.49-.58.95a1.5 1.5 0 0 1-2.46-1.71q.22-.33.4-.66M3.13 10.04a1.5 1.5 0 0 1 1.38 1.6 5 5 0 0 0 0 .79 1.5 1.5 0 0 1-3 .11 14 14 0 0 1 .01-1.1 1.5 1.5 0 0 1 1.6-1.4M20.75 10a1.5 1.5 0 0 1 1.69 1.3 8 8 0 0 1 .07 1.18 1.5 1.5 0 0 1-3-.02 6 6 0 0 0-.04-.77 1.5 1.5 0 0 1 1.28-1.68M8.64 7.45A1.5 1.5 0 0 1 10.22 10l-.39.25a1.5 1.5 0 1 1-1.66-2.5zM3.44 6.42A1.5 1.5 0 0 1 5.86 8.2q-.23.32-.42.64a1.5 1.5 0 1 1-2.59-1.52q.27-.45.59-.89M16.8 6.84a1.5 1.5 0 0 1 2-.68q.6.29 1.11.68a1.5 1.5 0 1 1-1.82 2.39q-.28-.21-.61-.38a1.5 1.5 0 0 1-.69-2M13.97 5.45a1.5 1.5 0 0 1 .38 2.98q-.41.05-.85.15a1.5 1.5 0 0 1-.69-2.92q.6-.14 1.16-.2M7.38 3a1.5 1.5 0 1 1 1.43 2.63l-.68.41a1.5 1.5 0 1 1-1.65-2.5q.44-.3.9-.54M11.75 1.52a1.5 1.5 0 0 1 .5 2.96l-.4.07a1.5 1.5 0 0 1-.6-2.94z" />
    </IconBase>
  ))
);

LassoDashFill.displayName = 'LassoDashFill';

// Triple export pattern (lucide-react style)
export { LassoDashFill, LassoDashFill as LassoDashFillIcon, LassoDashFill as SiLassoDashFill };
export default LassoDashFill;
export type { LassoDashFillProps };
