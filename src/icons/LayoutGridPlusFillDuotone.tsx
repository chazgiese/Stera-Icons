import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutGridPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-plus-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.5 13a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-2.5H14a1 1 0 1 1 0-2h2.5V14a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M6.8 13q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zM6.8 2q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q1.99 7.6 2 6.8v-.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q5.4 1.99 6.2 2zM17.8 2q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03z" />
    </IconBase>
  ))
);

LayoutGridPlusFillDuotone.displayName = 'LayoutGridPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutGridPlusFillDuotone, LayoutGridPlusFillDuotone as LayoutGridPlusFillDuotoneIcon, LayoutGridPlusFillDuotone as SiLayoutGridPlusFillDuotone };
export default LayoutGridPlusFillDuotone;
export type { LayoutGridPlusFillDuotoneProps };
