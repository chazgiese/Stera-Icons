import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-plus-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.13 12.75a1 1 0 0 1 1 1v2.38h2.37a1 1 0 1 1 0 2h-2.37v2.37a1 1 0 1 1-2 0v-2.37h-2.38a1 1 0 1 1 0-2h2.38v-2.38a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M7.05 12.88q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v.35q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38v-.35q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM7.05 2.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v.35q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38V6.7q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM17.3 2.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v.35q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04h-.35q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38V6.7q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.05 1.38-.04z" />
    </IconBase>
  ))
);

LayoutGridPlusFillDuotone.displayName = 'LayoutGridPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutGridPlusFillDuotone, LayoutGridPlusFillDuotone as LayoutGridPlusFillDuotoneIcon, LayoutGridPlusFillDuotone as SiLayoutGridPlusFillDuotone };
export default LayoutGridPlusFillDuotone;
export type { LayoutGridPlusFillDuotoneProps };
