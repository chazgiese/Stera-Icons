import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckBadgeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-badge-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.06 1.88a2.75 2.75 0 0 1 3.88 0l1.23 1.23c.23.23.55.36.88.36h1.73a2.75 2.75 0 0 1 2.75 2.75v1.73q0 .51.36.88l1.23 1.23a2.75 2.75 0 0 1 0 3.88l-1.23 1.23c-.23.23-.36.55-.36.88v1.73a2.75 2.75 0 0 1-2.75 2.75h-1.73c-.33 0-.65.13-.88.36l-1.23 1.23a2.75 2.75 0 0 1-3.88 0l-1.23-1.23a1.3 1.3 0 0 0-.88-.36H6.22a2.75 2.75 0 0 1-2.75-2.75v-1.73c0-.33-.13-.65-.36-.88l-1.23-1.23a2.75 2.75 0 0 1 0-3.88l1.23-1.23c.23-.23.36-.55.36-.88V6.22a2.75 2.75 0 0 1 2.75-2.75h1.73q.51 0 .88-.36zm2.82 1.06a1.25 1.25 0 0 0-1.76 0L9.89 4.17c-.51.51-1.21.8-1.94.8H6.22c-.69 0-1.25.56-1.25 1.25v1.73c0 .73-.29 1.43-.8 1.94l-1.23 1.23a1.25 1.25 0 0 0 0 1.76l1.23 1.23c.51.51.8 1.21.8 1.94v1.73c0 .69.56 1.25 1.25 1.25h1.73c.73 0 1.43.29 1.94.8l1.23 1.23c.48.48 1.28.48 1.76 0l1.23-1.23c.51-.51 1.21-.8 1.94-.8h1.73c.69 0 1.25-.56 1.25-1.25v-1.73c0-.73.29-1.43.8-1.94l1.23-1.23c.48-.48.48-1.28 0-1.76l-1.23-1.23a2.8 2.8 0 0 1-.8-1.94V6.22c0-.69-.56-1.25-1.25-1.25h-1.73c-.73 0-1.43-.29-1.94-.8z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.35 8.97a.75.75 0 1 1 1.06 1.06l-4.85 4.85-.32.3q-.15.15-.48.26-.42.12-.83-.06c-.2-.08-.34-.22-.44-.33l-.27-.34-1.7-2.26a.75.75 0 0 1 1.2-.9l1.7 2.26.04.05q0-.03.04-.04z" />
    </IconBase>
  ))
);

CheckBadgeRegularDuotone.displayName = 'CheckBadgeRegularDuotone';

// Triple export pattern (lucide-react style)
export { CheckBadgeRegularDuotone, CheckBadgeRegularDuotone as CheckBadgeRegularDuotoneIcon, CheckBadgeRegularDuotone as SiCheckBadgeRegularDuotone };
export default CheckBadgeRegularDuotone;
export type { CheckBadgeRegularDuotoneProps };
